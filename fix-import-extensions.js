import fs from 'fs';
import path from 'path';
import glob from 'fast-glob';

// Extensions to check.
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const files = await glob('src/**/*.{js,jsx,ts,tsx}', {
    absolute: true,
    ignore: ['**/node_modules/**'],
});

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    content = content.replace(/(import\s.*?from\s+['"])(\.\/[^'"]+)(['"])/g, (match, before, importPath, after) => {
        const fullDir = path.dirname(file);
        const fullPathWithoutExt = path.resolve(fullDir, importPath);

        // Extension already present → skip.
        if (extensions.some((ext) => importPath.endsWith(ext))) {
            return match;
        }

        // Search for existing file with valid extension.
        for (const ext of extensions) {
            const testPath = `${fullPathWithoutExt}${ext}`;
            if (fs.existsSync(testPath)) {
                changed = true;
                return `${before}${importPath}${ext}${after}`;
            }
        }

        return match; // No update possible
    });

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✔ Updated imports in ${file}`);
    }
}

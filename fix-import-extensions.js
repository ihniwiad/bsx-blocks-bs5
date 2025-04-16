import fs from 'fs';
import path from 'path';
import glob from 'fast-glob';

// Extensions to check.
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const files = await glob('src/**/*.{js,jsx,ts,tsx}', {
    absolute: true,
    ignore: ['**/node_modules/**'],
});

const importRegex = new RegExp(
    `(import\\s+[\\s\\S]*?from\\s+['"])(\\.\\/[^'"]+)(['"])`,
    'gm' // g = global, m = multiline
);

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
    let changed = false;

    const updated = content.replace(importRegex, (match, before, importPath, after) => {

        const fullDir = path.dirname(file);
        const fullPathWithoutExt = path.resolve(fullDir, importPath);

        // Skip if already has an extension
        if (extensions.some((ext) => importPath.endsWith(ext))) {
            return match;
        }
    
        // Check for direct file match
        for (const ext of extensions) {
            const testFile = `${fullPathWithoutExt}${ext}`;
            if (fs.existsSync(testFile)) {
                changed = true;
                return `${before}${importPath}${ext}${after}`;
            }
        
            // Check for index file in folder
            const indexFile = path.join(fullPathWithoutExt, `index${ext}`);
            if (fs.existsSync(indexFile)) {
                changed = true;
                return `${before}${importPath}${ext}${after}`; // or: `${importPath}/index${ext}`
            }
        }

        return match; // No update possible
    });

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✔ Updated imports in ${file}`);
    }
}

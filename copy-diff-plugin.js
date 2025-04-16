import fs from 'fs-extra';
import chokidar from 'chokidar';
import path from 'path';
import pc from 'picocolors';
import dotenv from 'dotenv';

dotenv.config();

const pluginFolder = process.env.FOLDER_NAME || 'my_plugin';
const publishPath = process.env.PUBLISH_PATH;

if (!publishPath) {
  console.log(pc.yellow('[copy] No PUBLISH_PATH defined – skipping copy process.'));
  process.exit(0);
}

const srcDir = path.resolve(process.cwd());
const destDir = path.resolve(publishPath, pluginFolder);
const allowedExtensions = ['.js', '.jsx', '.json', '.php', '.scss', '.css', '.po', '.mo', '.txt'];

const shouldCopy = (relPath) => {
    const ext = path.extname(relPath);
    return (
        !relPath.startsWith('node_modules') &&
        !relPath.startsWith('.git') &&
        !relPath.includes('.DS_Store') &&
        (ext === '' || allowedExtensions.includes(ext)) // Empty extension = folder or special file
    );
};

// Full copy.
const copyAll = async () => {
    console.log(pc.cyan(`[copyAll] Copying full plugin → ${destDir}`));

    const files = await fs.readdir(srcDir, { withFileTypes: true });

    const recursiveCopy = async (srcBase) => {
        const entries = await fs.readdir(srcBase, { withFileTypes: true });

        for (const entry of entries) {
            const fullSrc = path.join(srcBase, entry.name);
            const rel = path.relative(srcDir, fullSrc);
            const fullDest = path.join(destDir, rel);

            if (!shouldCopy(rel)) continue;

            if (entry.isDirectory()) {
                await recursiveCopy(fullSrc);
            } else {
                const srcStat = await fs.stat(fullSrc);
                let needsCopy = true;

                try {
                    const destStat = await fs.stat(fullDest);
                    needsCopy = srcStat.mtime > destStat.mtime;
                } catch {
                    // Dest file doesn't exist.
                    needsCopy = true;
                }

                if (needsCopy) {
                    await fs.ensureDir(path.dirname(fullDest));
                    await fs.copyFile(fullSrc, fullDest);
                    console.log(pc.green(`[copy] ${rel}`));
                }
            }
        }
  };

  await recursiveCopy(srcDir);
  console.log(pc.green(`[done] Full copy finished.`));
};

// Watch copy.
const copySingleFile = async (filePath) => {
    const relPath = path.relative(srcDir, filePath);
    const destPath = path.join(destDir, relPath);

    if (!shouldCopy(relPath)) return;

    try {
        await fs.ensureDir(path.dirname(destPath));
        await fs.copy(filePath, destPath);
        console.log(pc.green(`[watch-copy] ${relPath}`));
    } catch (err) {
        console.error(pc.red(`[error] Failed to copy ${relPath}: ${err.message}`));
    }
};

const removeFile = async (filePath) => {
    const relPath = path.relative(srcDir, filePath);
    const destPath = path.join(destDir, relPath);

    try {
        await fs.remove(destPath);
        console.log(pc.red(`[watch-delete] ${relPath}`));
    } catch (err) {
        console.error(pc.red(`[error] Failed to remove ${relPath}: ${err.message}`));
    }
};

const startWatcher = () => {
    console.log(pc.blue(`[watching] Plugin: ${srcDir}`));
    console.log(pc.blue(`[watching] Target: ${destDir}`));

    chokidar
        .watch(srcDir, {
            ignored: /(^|[/\\])node_modules|\.git/,
            ignoreInitial: true,
            persistent: true,
        })
        .on('add', copySingleFile)
        .on('change', copySingleFile)
        .on('unlink', removeFile);
};

// Task switcher.
const mode = process.argv[2];

    if (mode === 'watch') {
        await copyAll();
        startWatcher();
    } else if (mode === 'copy') {
        await copyAll();
    } else {
        console.log(pc.yellow(`[info] Use one of:`));
        console.log(pc.yellow(`  node copy-diff-plugin.js copy`));
        console.log(pc.yellow(`  node copy-diff-plugin.js watch`));
}

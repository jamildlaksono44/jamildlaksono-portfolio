import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get current working directory at execution time
const cwd = process.cwd();
const projectRoot = cwd;
const owner = 'jamildlaksono44';
const repo = 'jamildlaksono-portfolio';
const branch = 'main';

console.log('[v0] Starting GitHub sync via tarball...');
console.log('[v0] Current working directory:', projectRoot);

async function syncFromGithub() {
  try {
    // Verify we're in a valid project directory
    if (!fs.existsSync(path.join(projectRoot, 'package.json'))) {
      throw new Error(`package.json not found in ${projectRoot}`);
    }

    const downloadUrl = `https://github.com/${owner}/${repo}/archive/refs/heads/${branch}.tar.gz`;
    console.log('[v0] Downloading from:', downloadUrl);

    const tempFile = '/tmp/repo.tar.gz';
    const tempExtract = '/tmp/gh-extract';

    // Create temp directory
    if (!fs.existsSync(tempExtract)) {
      fs.mkdirSync(tempExtract, { recursive: true });
    }

    // Download tarball
    console.log('[v0] Downloading repository archive...');
    execSync(`curl -L -o ${tempFile} "${downloadUrl}"`, { stdio: 'inherit' });

    // Extract tarball
    console.log('[v0] Extracting archive...');
    execSync(`cd ${tempExtract} && tar -xzf ${tempFile}`, { stdio: 'inherit' });

    // Find the extracted directory name
    const extractedDir = fs.readdirSync(tempExtract)[0];
    const sourcePath = path.join(tempExtract, extractedDir);
    console.log('[v0] Extracted to:', sourcePath);

    console.log('[v0] Clearing old project files (except .git, node_modules, .next)...');
    const files = fs.readdirSync(projectRoot);
    for (const file of files) {
      if (!['node_modules', '.git', '.next', 'scripts'].includes(file)) {
        const fullPath = path.join(projectRoot, file);
        try {
          const stat = fs.lstatSync(fullPath);
          if (stat.isDirectory()) {
            console.log('[v0] Removing directory:', file);
            execSync(`rm -rf "${fullPath}"`, { stdio: 'pipe' });
          } else {
            console.log('[v0] Removing file:', file);
            fs.unlinkSync(fullPath);
          }
        } catch (e) {
          console.log('[v0] Could not remove:', file, e.message);
        }
      }
    }

    console.log('[v0] Copying new files from extracted archive...');
    execSync(`cp -r "${sourcePath}"/* "${projectRoot}/"`, { stdio: 'inherit' });
    
    // Also copy hidden files (but be more careful)
    try {
      const hiddenFiles = fs.readdirSync(sourcePath, { withFileTypes: true })
        .filter(dirent => dirent.name.startsWith('.') && !['.', '..', '.git', '.next'].includes(dirent.name));
      
      for (const file of hiddenFiles) {
        const source = path.join(sourcePath, file.name);
        const dest = path.join(projectRoot, file.name);
        console.log('[v0] Copying hidden:', file.name);
        execSync(`cp -r "${source}" "${dest}"`, { stdio: 'pipe' });
      }
    } catch (e) {
      console.log('[v0] Hidden files copy completed or skipped');
    }

    console.log('[v0] Cleaning up temporary files...');
    execSync(`rm -rf ${tempExtract} ${tempFile}`, { stdio: 'pipe' });

    console.log('[v0] ✓ GitHub sync completed successfully!');
    console.log('[v0] Your project has been updated with the latest code from main branch.');
    
  } catch (error) {
    console.error('[v0] Error during GitHub sync:', error.message);
    process.exit(1);
  }
}

syncFromGithub();

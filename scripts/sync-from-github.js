import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';
import { exec } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

console.log('[v0] Starting GitHub sync...');
console.log('[v0] Project root:', projectRoot);

// Use git commands to fetch and checkout main branch
const execAsync = promisify(exec);

async function syncFromGithub() {
  try {
    console.log('[v0] Fetching latest from GitHub...');
    
    // Fetch latest from origin
    const { stdout: fetchOutput } = await execAsync('git fetch origin main', {
      cwd: projectRoot,
      maxBuffer: 10 * 1024 * 1024
    });
    console.log('[v0] Fetch output:', fetchOutput || 'Success');
    
    // Reset hard to origin/main
    console.log('[v0] Resetting to origin/main...');
    const { stdout: resetOutput } = await execAsync('git reset --hard origin/main', {
      cwd: projectRoot,
      maxBuffer: 10 * 1024 * 1024
    });
    console.log('[v0] Reset output:', resetOutput || 'Success');
    
    // Clean working directory
    console.log('[v0] Cleaning working directory...');
    const { stdout: cleanOutput } = await execAsync('git clean -fd', {
      cwd: projectRoot,
      maxBuffer: 10 * 1024 * 1024
    });
    console.log('[v0] Clean output:', cleanOutput || 'Success');
    
    console.log('[v0] GitHub sync completed successfully!');
    console.log('[v0] You may need to restart the dev server to pick up all changes.');
    
  } catch (error) {
    console.error('[v0] Error during GitHub sync:', error.message);
    console.error('[v0] Error details:', error);
    process.exit(1);
  }
}

syncFromGithub();

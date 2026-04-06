import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function pullLatestFromGitHub() {
  try {
    console.log('Fetching latest from origin main...');
    await execAsync('cd /vercel/share/v0-project && git fetch origin main');
    
    console.log('Resetting to latest main branch...');
    await execAsync('cd /vercel/share/v0-project && git reset --hard origin/main');
    
    console.log('Successfully pulled latest code from GitHub!');
  } catch (error) {
    console.error('Error pulling from GitHub:', error.message);
    process.exit(1);
  }
}

pullLatestFromGitHub();

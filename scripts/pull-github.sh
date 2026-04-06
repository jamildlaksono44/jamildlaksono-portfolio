#!/bin/bash
set -e

cd /vercel/share/v0-project

# Fetch the latest from origin
git fetch origin main

# Reset to the latest main branch
git reset --hard origin/main

echo "Successfully pulled latest code from GitHub!"

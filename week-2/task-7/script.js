const fs = require('fs');
const path = require('path');

// Function to create a backup of a file
function createBackup(filePath) {
  try {
    const fileData = fs.readFileSync(filePath);
    const backupFilePath = filePath.replace('.txt','') + '.bak';
    fs.writeFileSync(backupFilePath, fileData);
    console.log(`Backup created successfully: ${backupFilePath}`);
  } catch (error) {
    console.error('Error creating backup:', error);
  }
}

// Function to restore a file from a backup
function restoreBackup(backupFilePath) {
  try {
    const originalFilePath = backupFilePath;
    const fileData = fs.readFileSync(backupFilePath);
    fs.writeFileSync(originalFilePath, fileData);
    console.log(`Backup restored successfully: ${originalFilePath}`);
  } catch (error) {
    console.error('Error restoring backup:', error);
  }
}

// Example usage
const filePath = 'C:\\Users\\qaz12\\Desktop\\FSWD\\week-2\\task-7\\file.txt';

// Create a backup
createBackup(filePath);

// Restore the backup
const backupFilePath = filePath.replace('.txt','') + '.bak';
restoreBackup(backupFilePath);

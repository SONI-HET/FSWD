const fs = require('fs');
const path = require('path');

// Function to create a file
function createFile(filePath, content = '') {
  fs.writeFileSync(filePath, content);
  console.log(`File created: ${filePath}`);
}

// Function to read a file
function readFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`File content (${filePath}):\n${content}`);
  } catch (error) {
    console.error(`Error reading file (${filePath}):`, error);
  }
}

// Function to append content to a file
function appendToFile(filePath, content) {
  try {
    fs.appendFileSync(filePath, content);
    console.log(`Content appended to file (${filePath})`);
  } catch (error) {
    console.error(`Error appending content to file (${filePath}):`, error);
  }
}

// Function to delete a file
function deleteFile(filePath) {
  try {
    fs.unlinkSync(filePath);
    console.log(`File deleted: ${filePath}`);
  } catch (error) {
    console.error(`Error deleting file (${filePath}):`, error);
  }
}

// Function to rename a file
function renameFile(oldFilePath, newFilePath) {
  try {
    fs.renameSync(oldFilePath, newFilePath);
    console.log(`File renamed from ${oldFilePath} to ${newFilePath}`);
  } catch (error) {
    console.error(`Error renaming file (${oldFilePath}):`, error);
  }
}

// Function to list files and directories in a given directory
function listFilesAndDirs(directoryPath) {
  try {
    const items = fs.readdirSync(directoryPath);
    console.log(`Files and directories in ${directoryPath}:`);

    for (const item of items) {
      const itemPath = path.join(directoryPath, item);
      const itemType = fs.statSync(itemPath).isDirectory() ? 'Directory' : 'File';
      console.log(`${itemType}: ${item}`);
    }
  } catch (error) {
    console.error(`Error listing files and directories (${directoryPath}):`, error);
  }
}

// Example usage
const filePath = 'C:\\Users\\qaz12\\Desktop\\FSWD\\week-2\\task-9\\file.txt';
const directoryPath = 'C:\\Users\\qaz12\\Desktop\\FSWD\\week-2\\task-9\\folder';

// Create a file
createFile(filePath, 'Hello, World!');

// Read a file
readFile(filePath);

// Append content to a file
appendToFile(filePath, '\nThis is an appended content.');

// Read the file again to see the appended content
readFile(filePath);

// Delete the file
deleteFile(filePath);

// Rename a file
const oldFilePath = 'C:\\Users\\qaz12\\Desktop\\FSWD\\week-2\\task-9\\file.txt';
const newFilePath = 'C:\\Users\\qaz12\\Desktop\\FSWD\\week-2\\task-9\\file.txt';
createFile(oldFilePath, 'Original content');
renameFile(oldFilePath, newFilePath);
readFile(newFilePath);

// List files and directories in a directory
listFilesAndDirs(directoryPath);

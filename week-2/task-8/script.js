const fs = require('fs');
const path = require('path');

// Function to create a file/folder structure recursively
function createStructure(rootPath, structure) {
  for (const item of structure) {
    const itemPath = path.join(rootPath, item.name);

    if (item.type === 'file') {
      // Create a file
      fs.writeFileSync(itemPath, '');
      console.log(`File created: ${itemPath}`);
    } else if (item.type === 'folder') {
      // Create a folder
      fs.mkdirSync(itemPath);
      console.log(`Folder created: ${itemPath}`);

      // Recursively create structure inside the folder
      createStructure(itemPath, item.children);
    }
  }
}

// Example usage
const jsonFilePath = 'C:\\Users\\qaz12\\Desktop\\FSWD\\week-2\\task-8\\file.json';

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    const structure = JSON.parse(data);
    const rootPath = path.dirname(jsonFilePath);

    // Create the file/folder structure
    createStructure(rootPath, structure);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});

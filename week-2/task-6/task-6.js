const fs = require('fs')

let f1 = ""
let f2 = ""
function compareFiles(file1, file2) {
    // Get the sizes of the two files.
    const file1Size = fs.statSync(file1).size;
    const file2Size = fs.statSync(file2).size;
    // If the sizes are the same, compare the contents of the files line by line.
    if ((file1Size === file2Size)) {
        if((fs.readFileSync(file1, "utf8")) == (fs.readFileSync(file2, "utf8"))){
            console.log("Both files are having same size with same content");
        }
        else{
      const file1Data = fs.readFileSync(file1, "utf8");
      const file2Data = fs.readFileSync(file2, "utf8");
      process.stdout.write('Line ')
      for (let i = 0; i < file1Data.length; i++) {
        if (file1Data[i] !== file2Data[i]) {
            process.stdout.write(`${i + 1} `)
          f1+=file1Data[i];
          f2+=file2Data[i];
        //   console.log(`File 1: ${file1Data[i]}`)
        //   console.log(`File 2: ${file2Data[i]}`)
        }
      }
      process.stdout.write('are different\n')
      console.log('file 1 different words found are', '\'',f1,'\'');
      console.log('file 2 different words found are', '\'',f2,'\'');
    }
    } else {
      // The files are different sizes, so we can just print out which file is larger.
      if(file1Size>file2Size)
      {
        console.log('file1.txt are more in size');
      }
      else{
        console.log('file2.txt are more in size');

      }
    }
  }
  
  // Call the compareFiles function with the two file paths as arguments.
  compareFiles("C:\\Users\\qaz12\\Desktop\\FSWD\\week-2\\task-6\\file1.txt", "C:\\Users\\qaz12\\Desktop\\FSWD\\week-2\\task-6\\file2.txt");
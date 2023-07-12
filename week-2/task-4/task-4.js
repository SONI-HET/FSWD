const fs = require('fs');

const data = fs.readFileSync('student-data.txt', 'utf8');

const students = data.split('\n').map(line => { 
  const [name, cgpa] = line.split(',');
  return { name, cgpa };
});

const filteredStudents = students.filter(student => {
  return (student.name.includes('MA') && student.cgpa > 7);
});
console.log('students name contains \'MA\' and having cgpa > 7 are... ');
for (const i of filteredStudents) {
    console.log(i.name,"->", i.cgpa);
}
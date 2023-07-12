const fs = require("fs");
const employeeName = 'het soni'
const employeeEmail = 'het@gmail.com'
const employeePhone = '9876543210'

const employeeData = {
  name: employeeName,
  email: employeeEmail,
  phone: employeePhone
};

fs.writeFile('myfile.json', JSON.stringify(employeeData), (err) => {
  if (err) console.error(err);
  else console.log('File written successfully');
  
});



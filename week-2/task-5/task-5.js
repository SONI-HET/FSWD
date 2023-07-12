// Get the employee information from the user.
const employeeName = 'het soni'
const employeeEmail = 'het@gmail.com'
const employeePhone = '9876543210'

// Create a JSON object with the employee information.
const employeeData = {
  name: employeeName,
  email: employeeEmail,
  phone: employeePhone
};

// Write the JSON object to a file called "employee-data.json".
const fs = require("fs");
fs.writeFile('myfile.json', JSON.stringify(employeeData), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File written successfully');
  }
});
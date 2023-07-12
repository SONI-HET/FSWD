
//Send request using rest client
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000");
 
xhr.onreadystatechange = function () {
    console.log("readyState = " + this.readyState + ", status = " + this.status);
    if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        console.log(result);
    }
};
xhr.send();
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var request = new XMLHttpRequest();
// request.open('GET', 'http://localhost:3000');
// request.send();

// request.onload = function () {
//   if (request.status == 200) {
//     var data = JSON.parse(request.responseText);
//     console.log(data);
//   } else {
//     console.log('Error: ' + request.statusText);
//   }
// };
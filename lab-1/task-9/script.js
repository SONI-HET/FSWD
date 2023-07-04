function myDisplayer(some) {
    document.getElementById("demo").innerHTML = "The multiplication of two numbers: "+some+'<br>';
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 * num2;
    myDisplayer(sum);
  }
  
  myCalculator(15, 5);
  setTimeout(myFunction, 2000);

function myFunction() {
    document.getElementById("demo").innerHTML += "Welcome to the world!!";
}
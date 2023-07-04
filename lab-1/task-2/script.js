function myMath(){
    let num1=parseInt(document.getElementById('numId1').value);
    let num2=parseInt(document.getElementById('numId2').value);
    let sum=num1+num2;
    let diff=num1-num2;
    let product=num1*num2;
    let quotient=num1/num2;

    //Display content
    var output = document.getElementById("demo");
    output.innerHTML += "Sum of number: "+ sum + "<br>";
    output.innerHTML += "Difference of number: "+ diff + "<br>";
    output.innerHTML += "Product of number: "+ product + "<br>";
    output.innerHTML += "Quotient of number: "+ quotient + "<br>";
}
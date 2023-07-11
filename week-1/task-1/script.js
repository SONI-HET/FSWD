function myFun(){
    //Use of var keyword
    var num1=15;
    var num2=71;
    var result=num1+num2;
    console.log(result);

    //Use of let keyword
    let firstName="Rohan";
    let lastName="Sharma";
    let name=firstName.concat(" ",lastName);
    console.log(name);

    //Use of const keyword
    const arr=[12,'Ahmedabad',24,'Vadodara']
    console.log(arr);

    //Display content
    var outputElement = document.getElementById("demo");
    outputElement.innerHTML = "Using Var keyword and Integer datatype: "+ result + "<br>";
    outputElement.innerHTML += "Using Let keyword and String datatype: "+ name + "<br>";
    outputElement.innerHTML += "Using Const keyword and Array datatype: "+ arr + "<br>";
}
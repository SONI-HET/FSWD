function displayAge() {
    var age = parseInt(document.getElementById('ageId').value);
    var message;
    if (age < 18) {
        message = "You are a minor!!";
      } else if (age >= 18 && age <= 65) {
        message = "You are an adult!!";
      } else {
        message = "You are a senior citizen!!";
      }
    var outputElement = document.getElementById("demo");
    outputElement.innerHTML = message;
}
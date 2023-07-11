function mydisplay(){
    let num=parseInt(document.getElementById('numId').value);
    let msg=document.getElementById('demoId');
    msg.innerHTML="";
    function throwAnError() {
        if(num<0)
        throw new Error('You entered negative number!!');
    }
    try {
        throwAnError();
    } catch (error) {
        // document.getElementById('demoId').innerHTML = error.message+'<br>';
        msg.innerHTML=error.message+'<br>';
        msg.innerHTML+=error.name;
        console.log(error.message);
        console.log(error.name); // Error
    }
}
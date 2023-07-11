console.log("hi!!!");


let studObj = {

    id : "21it155",
    division : "IT-2",
    sem : 5
}
console.log(studObj);

console.log(studObj.division);
console.log(studObj.id);
console.log(studObj.sem);


const promise = new Promise(function (resolve, reject){
    let data = "data is loading"
    setTimeout(((data) => {
        data = "data is loaded"
        resolve(studObj)       
    }), 4000)
    if(studObj.sem==1)
        reject(new Error("something is wrong!!!"))

}).then((data)=>{
    console.log(data);
    document.getElementById("print").textContent = "student id = "+studObj.id+"\n"+" student division = " +studObj.division+"\n"+" student sem = "+studObj.sem+"\n";
}).catch((err) => {
    console.log(err);
})

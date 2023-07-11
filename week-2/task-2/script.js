console.log("hi!!!");

const studObj = {

    id: "21it155",
    division: "IT-2",
    sem: 5
}
// console.log(studObj);

// console.log(studObj.division);
// console.log(studObj.id);
// console.log(studObj.sem);


async function asyncawait() {
    const promise = new Promise(function (resolve, reject) {
        let data = "data is loading"
        setTimeout(((data) => {
            data = "data is loaded"
            resolve(studObj)
        }), 4000)
        if (studObj.sem != 5)
            reject(new Error("Something went wrong"))

    })
    try {
        const data = await promise;
        console.log(data.id + "\n" + data.division + "\n" + data.sem);
        const data1 = "student id = " + data.id + "<br>" + "student division = " + data.division + "<br>" + "student semester = " + data.sem
        document.getElementById("print").innerHTML = data1
    }
    catch (err) {
        console.error(err);
    }
}
asyncawait();
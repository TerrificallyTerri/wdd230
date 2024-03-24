// Get a timestamp
const timeStamp = new Date().getTime();
console.log('line3', timeStamp)

function GetDateFromTimeStamp() {
    let date = new Date(timeStamp);
    console.log("Milliseconds = " + date.toString());
    return date.toString();
}
const submitTime = GetDateFromTimeStamp();
document.getElementById("submit-time").innerHTML = submitTime;
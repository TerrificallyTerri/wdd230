// Set the year for copyright
const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// Set the date when last updated
const fullDate = new Date();

let date = fullDate.toLocaleDateString();
let time = fullDate.toLocaleTimeString();
// console.log(date);

document.getElementById("lastModified").innerHTML = `Last Loaded: ${date}, ${time}`;
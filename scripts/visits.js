// Counter for number of vistis to site

// Variable to display result
const showVisits = document.getElementById('visits');
let count = Number(window.localStorage.getItem('visitStored'))
console.log(count)

// Check if the user has visited Before
if (isNaN(count) || count === 0) { //got help from chatGPT here as I couldn't figure the NaN issue
    showVisits.textContent = `Welcome to the site! `
    count = 1
    console.log(count)


} else {
    showVisits.innerHTML = `${count} <br> Welcome Back!`
}
// update the local storage count
count++;
localStorage.setItem('visitStored', count);

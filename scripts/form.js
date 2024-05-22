const password = document.getElementById('password');
const confirmPsw = document.getElementById('confirm_password');
const pswMessage = document.getElementById('pswmessage');

confirmPsw.addEventListener("focusout", checkSame);

function checkSame() {
    if (password.value !== confirmPsw.value) {
        pswMessage.textContent = "❗Passwords do not match!";
        pswMessage.style.visibility = "show";
        confirmPsw.style.backgroundColor = "#fe0033";
        confirmPsw.value = "";
        pswMessage.focus();
    } else {
        pswMessage.style.display = "none";
        confirmPsw.style.backgroundColor = "#FFF";
        confirmPsw.style.color = "#000";
    }
}

const rangeValue = document.getElementById("rangevalue");
const range = document.getElementById("range");

range.addEventListener('change', displayValue);

function displayValue() {
    rangeValue.innerHTML = `Your Rating: ${range.value}`;
}
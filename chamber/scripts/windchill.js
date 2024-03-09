// Wind Chill
// idea to do it like this obtained from Noah Ruppe on Teams
// had to use different location - No wind chill at 34°C and 4km/h wind speed

// Variables to store data
let apiTemp;
let apiWind;

// fetch data from api
async function fetchWeatherData() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=65.888682&longitude=-20.31001&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph');
    const data = await response.json();

    // get data from api response and stick in variables
    apiTemp = data.current?.temperature_2m;
    console.log('Temp from site:', apiTemp);

    apiWind = data.current?.wind_speed_10m;
    console.log('Wind from site:', apiWind);

    // plug it into the the html
    updateHTML();
}

// put data into the html - func
function updateHTML() {
    const tempElement = document.getElementById('temp');
    const speedElement = document.getElementById('speed');
    tempElement.textContent = apiTemp !== undefined ? apiTemp : '...';
    speedElement.textContent = apiWind !== undefined ? apiWind : '...';

    // calc wind chill
    calcWindChill();
}

// Calc wind chill - func
function calcWindChill() {
    // Get numbers
    const temperature = parseFloat(apiTemp);
    const windSpeed = parseFloat(apiWind);

    // Calculate 
    const calculatedWindChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

    // stick value into html
    const windChillElement = document.getElementById('windChill');
    windChillElement.textContent = calculatedWindChill.toFixed(2);
}

// fetch weather data
fetchWeatherData();
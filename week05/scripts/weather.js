const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// const url = 'https:api.openweathermap.org/data/2.5/weather?lat=49.5&lon=6.64&appid=3a3e43bafe7ebe44d2787a69cae22297&units=metric';

async function apiFetch() {
    try {
        const response = await fetch('https:api.openweathermap.org/data/2.5/weather?lat=49.5&lon=6.64&appid=3a3e43bafe7ebe44d2787a69cae22297&units=metric');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function capitalization(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

function displayResults(data) {
    const temp = data.main.temp.toFixed();
    currentTemp.innerHTML = `${temp} °C`;

    const iconSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = capitalization(data.weather[0].description);
    weatherIcon.setAttribute('src', iconSource);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    captionDesc.textContent = `${desc}`;
}

apiFetch();

// Standard
//https:api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}


// metric
//https:api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric


// imperial
//https:api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=imperial


// to loop over the weather object

// function displayResults(data) {
//     const temp = data.main.temp.toFixed();
//     currentTemp.innerHTML = `${temp} °C`;

//     const iconSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let desc = capitalization(data.weather[0].description);
//     weatherIcon.setAttribute('src', iconSource);
//     weatherIcon.setAttribute('alt', 'Weather Icon');

//     // Clear previous weather descriptions
//     captionDesc.innerHTML = '';

//     // Loop through each weather event and display it
//     data.weather.forEach(weatherEvent => {
//         const iconSource = `https://openweathermap.org/img/w/${weatherEvent.icon}.png`;
//         const desc = capitalization(weatherEvent.description);

//         // Create new elements for each weather event
//         const img = document.createElement('img');
//         img.setAttribute('src', iconSource);
//         img.setAttribute('alt', 'Weather Icon');

//         const figcaption = document.createElement('figcaption');
//         figcaption.textContent = desc;

//         // Append new elements to the existing captionDesc element
//         captionDesc.appendChild(img);
//         captionDesc.appendChild(figcaption);
//     });
// }

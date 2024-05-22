const weatherContainer = document.querySelector('#weather');

weatherContainer.textContent = '';

async function apiFetch() {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-25.78&lon=29.47&appid=3a3e43bafe7ebe44d2787a69cae22297&units=metric");
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
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
    // create all the variables to store the data
    const heading = document.createElement('h3');
    const town = document.createElement('h4');
    const image = document.createElement('img');
    const caption = document.createElement('figcaption')
    const temperature = document.createElement('div')
    const tempMin = document.createElement('span');
    // const tempMax = document.createElement('span');
    // const feelsLike = document.createElement('p');
    const wind = document.createElement('p');
    const description = document.createElement('p');

    // load the data into the variables
    heading.textContent = `Weather:`

    town.textContent = `${capitalization(data.name)}`;
    // console.log(town);

    const imageSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = capitalization(data.weather[0].description);
    // console.log(desc);
    image.setAttribute('src', imageSource);
    image.setAttribute('alt', 'Weather Icon');
    caption.textContent = `${desc}`;

    tempMin.textContent = `Temperature: ${data.main.temp_min}°C`;
    // console.log(tempMin);
    // tempMax.textContent = `Max: ${data.main.temp_max}°C`;
    // console.log(tempMax);
    // feelsLike.textContent = `Feels Like: ${data.main.feels_like}°C`;
    // console.log(feelsLike);

    wind.textContent = `Wind Speed: ${((data.wind.speed + data.wind.gust) / 2).toFixed(2)} km/h`;
    // console.log(wind);

    description.textContent = `${desc}`;
    // console.log(description)

    temperature.appendChild(tempMin);
    // temperature.appendChild(tempMax);
    // temperature.appendChild(feelsLike);
    weatherContainer.appendChild(heading);
    weatherContainer.appendChild(town);
    weatherContainer.appendChild(image);
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(wind);
    weatherContainer.appendChild(description)
}

apiFetch();
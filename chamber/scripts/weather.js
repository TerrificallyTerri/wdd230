const weatherContainer = document.querySelector(".weather");
weatherContainer.textContent = "";
const forecastList = [];
const data = [];

async function apiFetch() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=-25.78&lon=29.47&appid=8d8836234963f2b46be8d683a23c5391&units=metric"
    );
    if (response.ok) {
      const data = await response.json();
      console.table(data);
      createList(data);
      displayResults(data, forecastList);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    const problem = document.createElement("h4");
    problem.textContent = `There has been a problem fetching the data`;
    weatherContainer.appendChild(problem);
  }
}

async function createList(data) {
  data.list.forEach((item) => {
    const time = item.dt_txt.split(" ")[1];
    if (time === "12:00:00") {
      forecastList.push(item);
    }
  });
}

function displayResults(data, forecastList) {
  const heading = document.createElement("h2");
  heading.classList.add("weather-header");
  const city = document.createElement("h3");
  city.classList.add("weather-header");
  const pop = document.createElement("p");
  pop.classList.add("weather-para");

  heading.textContent = `Weather`;
  city.textContent = `${data.city.name}`;
  pop.textContent = `Population: ${data.city.population}`;

  weatherContainer.appendChild(heading);
  weatherContainer.appendChild(city);
  weatherContainer.appendChild(pop);

  const todayFC = document.createElement("div");
  todayFC.classList.add("today");
  weatherContainer.appendChild(todayFC);

  const futureDays = document.createElement("div");
  futureDays.classList.add("future");
  weatherContainer.appendChild(futureDays);

  forecastList.forEach((forecast, index) => {
    if (index === 0) {
      const day = document.createElement("p");
      day.textContent = `Today: ${toDateString(forecast)}`;
      todayFC.appendChild(day);

      const imageSource = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      const image = document.createElement("img");
      image.setAttribute("src", imageSource);
      image.setAttribute("alt", "Weather Icon");
      todayFC.appendChild(image);

      const temp = document.createElement("h5");
      temp.textContent = `${forecast.main.temp}°C`;
      todayFC.appendChild(temp);

      const description = document.createElement("p");
      description.textContent = `${capitalization(
        forecast.weather[0].description
      )}`;
      todayFC.appendChild(description);
    } else if (index >= 1 && index <= 3) {
      const card = document.createElement("p");
      card.classList.add("future-card");
      futureDays.appendChild(card);

      const temp = document.createElement("h5");
      temp.textContent = `${forecast.main.temp}°C`;
      card.appendChild(temp);

      const day = document.createElement("span");
      const thing = toDateString(forecast);
      day.textContent = `${thing}`;
      card.appendChild(day);
    }
  });
}

function toDateString(forecast) {
  const dateString = forecast.dt_txt;
  const [datePart, timePart] = dateString.split(" ");
  const dateObj = new Date(datePart);
  const fixedDate = dateObj.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return fixedDate;
}

apiFetch();
console.log(forecastList);

function capitalization(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

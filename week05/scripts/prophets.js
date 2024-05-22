const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
async function getProphetData() {
    // Store the response from the fetch() method in a const variable named "response".
    const response = await fetch(url);
    // Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data = await response.json();
    // Add a console.table() expression method to check the data response at this point in the console window. 
    console.table(data);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img')

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Image of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250px');
        portrait.setAttribute('height', 'auto');
        card.setAttribute('class', "cardies")

        // Add the elements to the card
        card.appendChild(fullName);
        card.appendChild(portrait);

        // add the card to html
        cards.appendChild(card)

    });
}
// Call the function getProphetData() in the main line of your.js code to test the fetch and response.
getProphetData()






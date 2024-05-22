const baseURL = "../wdd230";
const linksURL = "./data/links.json";



async function getActivityData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.table(data);
    displayActivities(data.weeks);
}

const displayActivities = (weeks) => {
    // create a ul to contain the weeks
    const list = document.createElement('ul');
    // put each week into a li
    weeks.forEach(week => {
        // create the li to hold the info
        const weekItem = document.createElement('li');
        // create the span to hold the week number
        const span = document.createElement('span');
        // add a class to the span
        span.classList.add('weeks');
        // put the content into the li
        span.textContent = `${week.week}:`;

        // Loop through the links and add the anchor tags
        week.links.forEach(anchor => {
            // create the anchor tag for each link
            const anchorTag = document.createElement('a');
            anchorTag.classList.add('activities-link');
            anchorTag.textContent = anchor.title;
            // console.log(anchorTag)
            if (anchor.url.startsWith("https://")) {
                anchorTag.href = `${anchor.url}`
            } else {
                anchorTag.href = `${baseURL}/${anchor.url}`;
            }
            // attach to the parents
            list.appendChild(weekItem);
            weekItem.appendChild(span);
            weekItem.appendChild(anchorTag);
        });

        // attach the week items to the ul
        list.appendChild(weekItem);
    });

    document.querySelector('.activities').appendChild(list);
}
getActivityData();
const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

// Declare an array assign it function. 
// Add compound / condition to assign it an empty array in case this is first visit or if the 
// localStorage item is missing
let chaptersArray = getChapterList() || [];

// 4. Populate the displayed list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// 5. Button event listener to:
button.addEventListener('click', () => {
    // 1. check if input has value
    if (input.value != '') {
        // call the displayList function with the input.value argument
        displayList(input.value);
        // put the given chapter into the array
        chaptersArray.push(input.value);
        // update localStorage with the new array by calling another function : setChapterList
        setChapterList();
        // clear text box
        input.value = '';
        // return focus to text box
        input.focus();
    }
});

function displayList(item) {
    // create li element
    const listLine = document.createElement('li');
    // create delete button
    const deleteBttn = document.createElement('button');
    deleteBttn.textContent = '❌'

    // add li elements to text content of list
    listLine.textContent = item;

    // append li element with the delete button
    listLine.appendChild(deleteBttn);
    // append list line to unordered list
    list.appendChild(listLine);

    // add eventlistener to deleteBttn
    deleteBttn.addEventListener('click', () => {
        list.removeChild(listLine);
        // to remove the item fromt he storage
        deleteChapter(listLine.textContent);
        input.focus();
    });
}

// Store the chaptersArray in the local storage as a JSON string.
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
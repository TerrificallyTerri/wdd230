const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

// 2. eventlistener for submit button click
button.addEventListener('click', () => {
    // 3. check input is not blank
    if (input.value != '') {
        // create li element
        const listLine = document.createElement('li');
        // create delete button
        const deleteBttn = document.createElement('button');
        deleteBttn.textContent = '❌'

        // add li elements to text content of list
        listLine.textContent = input.value;

        // append li element with the delete button
        listLine.appendChild(deleteBttn);
        // append list line to unordered list
        list.appendChild(listLine);

        // add eventlistener to deleteBttn
        deleteBttn.addEventListener('click', () => {
            list.removeChild(listLine);
            input.focus();
        })
        // clear text box
        input.value = '';
    } else
        input.focus();
})

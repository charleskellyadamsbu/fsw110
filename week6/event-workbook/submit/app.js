// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

document.getElementsByTagName('button')[0].addEventListener('click', e => {
    document.getElementById('submit-me').addEventListener('submit', e => {
        e.preventDefault();
        alert(document.getElementById('name').value + '\n' + document.getElementById('age').value);
    });
});
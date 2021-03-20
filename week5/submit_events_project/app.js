let submit = document.getElementById('submit');

function displayAlert(Event) {
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let age = document.getElementById('age');
    let male = document.getElementById('male');
    let location = document.getElementById('location');

    let gender;

    if(male.checked == true) {
        gender = "Male";
    } else {
        gender = "Female";
    }

    let checkboxes = document.getElementsByClassName('checkboxes');

    let options = "";

    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked == true) {
            options = options.concat(checkboxes[i].value).concat(", ");
        }
    }

    options = options.slice(0, options.length - 2);

    alert(
        "First Name: " + firstName.value + "\n" +
        "Last Name: " + lastName.value + "\n" +
        "Age: " + age.value + "\n" +
        "Gender: " + gender + "\n" +
        "Location: " + location.value + "\n" +
        "Dietary Restrictions: " + options
        );
}

submit.onclick = displayAlert;
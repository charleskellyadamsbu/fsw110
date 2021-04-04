let title = document.getElementById('title');
let description = document.getElementById('description');
let submit = document.getElementById('submit');

submit.addEventListener('click', e => {
    e.preventDefault();

    if(title.value.length > 0 && description.value.length > 0) {
        let container = document.createElement('div');
        container.id = "todo-container";
    
        let titleText = document.createElement('div');
        titleText.textContent = title.value;
        titleText.id = "titleText";
    
        let descriptionText = document.createElement('div');
        descriptionText.textContent = description.value;
        descriptionText.id = "descriptionText";
    
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
    
        container.appendChild(titleText);
        container.appendChild(descriptionText);
        container.appendChild(deleteButton);
    
        deleteButton.addEventListener('click', e => {
            document.getElementsByClassName('container')[0].removeChild(container);
        });
    
        document.getElementsByClassName('container')[0].appendChild(container);
    }
});
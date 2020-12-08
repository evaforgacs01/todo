loadEvents();
function loadEvents() {
    document.querySelector('form').addEventListener('submit', 'submit');

}

function submit(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '')
    addTask(input.value);
    input.value = '';
}

function addTask(task) {
    let ul = document.querySelector('ul');
    let li = document.querySelector('li');
    li.innerHTML = `<span class="delete"></span><input type="checkbox"><label for="">${task}</label>`;
    ul.appendChild(li);
    document.querySelector('.taskBoard').style.display = 'block';
}
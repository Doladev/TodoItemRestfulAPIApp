// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const uri = 'api/TodoItems';
let todos = [];
function getToDoItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayToDoItems(data))
        .catch(error => console.error('Unable to get to-do items.', error));
}

function addToDoItem() {
    const addNameTextbox = document.getElementById('add-name');
    const item = {
        isComplete: false,
        description: addNameTextbox.value.trim()
    };
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getToDoItems();
            addNameTextbox.value = '';
        })
        .catch(error => console.error('Unable to add to-do item.', error));
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'task to-do' : 'task to-dos';
    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayToDoItems(data) {
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';
    _displayCount(data.length);
    const button = document.createElement('button');
    data.forEach(item => {
        addTableRow(tBody, item, button);
    });
    todos = data;
}

function addTableRow(tBody, item, button) {
    let statusLabel = document.createElement('label');
    let status = (item.isComplete) ? 'Completed' : 'Pending';
    statusLabel.innerHTML = status;

    let editButton = button.cloneNode(false);
    editButton.innerText = 'Edit';
    editButton.classList.add('text-center', 'btn', 'btn-warning', 'btn-sm', 'btn-block');

    let deleteButton = button.cloneNode(false);
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'btn-block');

    let tr = tBody.insertRow();
    tr.classList.add('mainbody');
    let td1 = tr.insertCell(0);
    td1.appendChild(statusLabel);
    let td2 = tr.insertCell(1);
    let textNode = document.createTextNode(item.description);
    td2.appendChild(textNode);
    let td3 = tr.insertCell(2);
    td3.appendChild(editButton);
    let td4 = tr.insertCell(3);
    td4.appendChild(deleteButton);
}
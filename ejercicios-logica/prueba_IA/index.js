let users = JSON.parse(localStorage.getItem('users')) || [];
let editingIndex = -1;

document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if(editingIndex === -1) {
        let user = { name: name, email: email };
        users.push(user);
        addRow(user);
    } else {
        users[editingIndex].name = name;
        users[editingIndex].email = email;
        updateRow(editingIndex, users[editingIndex]);
        editingIndex = -1;
    }

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    localStorage.setItem('users', JSON.stringify(users));
});

document.getElementById('save').addEventListener('click', function() {
    fetch('https://tu-servicio-rest.com/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(users),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
});

function addRow(user) {
    let userTable = document.getElementById('tbody');
    let row = userTable.insertRow(-1);
    row.insertCell(0).innerHTML = user.name;
    row.insertCell(1).innerHTML = user.email;
    let actions = row.insertCell(2);
    actions.innerHTML = '<button onclick="editUser(' + (users.length - 1) + ')">Editar</button> <button onclick="deleteUser(' + (users.length - 1) + ')">Eliminar</button>';
}

function updateRow(index, user) {
    let userTable = document.getElementById('user-table');
    let row = userTable.rows[index + 1];
    row.cells[0].innerHTML = user.name;
    row.cells[1].innerHTML = user.email;
}

function editUser(index) {
    let user = users[index];
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    editingIndex = index;
}

function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('user-table').deleteRow(index + 1);
}

users.forEach(addRow);
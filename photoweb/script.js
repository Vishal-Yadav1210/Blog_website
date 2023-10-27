let nameBtn = document.querySelector('button');
nameBtn.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt('Enter Name of user');
    nameBtn.textContent = 'User Name:' + name;
}
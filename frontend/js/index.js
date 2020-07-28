require('../style/style.css');
require('../img/WelcomeSW.png');
require('../img/task.png');


const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById('btn-menu')
    .addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('sidebar').classList.toggle('active');
    });
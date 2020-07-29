require('../style/style.css');
require('../img/WelcomeSW.png');
require('../img/task.png');

// Evento de click para mostrar la barra de menú
document.querySelector('.toggle-btn')
    .addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('active');
    });

document.getElementById('btn-menu')
    .addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('sidebar').classList.toggle('active');
    });
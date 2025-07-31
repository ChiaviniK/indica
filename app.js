document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Lógica do Formulário de Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            const users = { 'master': '123', 'fin': '123', 'edu': '123', 'agro': '123' };
            if (users[username] && users[username] === password) {
                window.location.href = `${username}.html`;
            } else {
                errorMessage.style.display = 'block';
            }
        });
    }
});
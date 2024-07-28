const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

function toggleActive(activeElement) {
    const isRegisterActive = activeElement === registerBtn;
    container.classList.toggle('active', isRegisterActive);
}

registerBtn.addEventListener('click', () => toggleActive(registerBtn));
loginBtn.addEventListener('click', () => toggleActive(loginBtn));
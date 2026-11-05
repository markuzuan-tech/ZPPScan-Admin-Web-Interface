let isAuthenticated = false;

function initAuthBackend() {
    const loginContainer = document.getElementById('login-container');
    
    // Fetch and mount the login view
    fetch('views/login_view.html')
        .then(res => res.text())
        .then(html => {
            loginContainer.innerHTML = html;
            bindAuthEvents();
            lucide.createIcons();
        });
}

function bindAuthEvents() {
    const loginForm = document.getElementById('form-login');
    const logoutBtn = document.getElementById('btn-logout');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            isAuthenticated = true;
            document.getElementById('login-container').classList.add('hidden');
            document.getElementById('dashboard-container').classList.remove('hidden');
            loadView('dashboard');
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            isAuthenticated = false;
            document.getElementById('dashboard-container').classList.add('hidden');
            document.getElementById('login-container').classList.remove('hidden');
        });
    }
}

document.addEventListener('DOMContentLoaded', initAuthBackend);
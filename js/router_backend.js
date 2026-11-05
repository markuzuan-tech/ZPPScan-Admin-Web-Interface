let activeTabName = 'dashboard';

function loadView(viewName) {
    activeTabName = viewName;
    const viewContent = document.getElementById('view-content');

    fetch(`views/${viewName}_view.html`)
        .then(res => res.text())
        .then(html => {
            viewContent.innerHTML = html;
            updateSidebarActiveState(viewName);
            bindRouterLinks();
            
            // Trigger backend initializers for loaded views
            if (viewName === 'dashboard') initDashboardBackend();
            if (viewName === 'events') initEventBackend();
            if (viewName === 'attendance') initAttendanceBackend();
            if (viewName === 'users') initUserBackend();
            
            lucide.createIcons();
        });
}

function updateSidebarActiveState(viewName) {
    document.querySelectorAll('.nav-link').forEach(btn => {
        if (btn.dataset.target === viewName) {
            btn.className = 'nav-link flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold bg-maroon text-white transition shadow-sm';
        } else {
            btn.className = 'nav-link flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition';
        }
    });
}

function bindRouterLinks() {
    document.querySelectorAll('[data-target]').forEach(elem => {
        elem.onclick = (e) => {
            const target = e.currentTarget.dataset.target;
            loadView(target);
            if (window.innerWidth < 768) {
                document.getElementById('sidebar').classList.add('-translate-x-full');
            }
        };
    });

    document.getElementById('btn-mobile-sidebar').onclick = () => {
        document.getElementById('sidebar').classList.remove('-translate-x-full');
    };

    document.getElementById('btn-close-sidebar').onclick = () => {
        document.getElementById('sidebar').classList.add('-translate-x-full');
    };
}

function initDashboardBackend() {
    const activeEventsElem = document.getElementById('stat-active-events');
    if (activeEventsElem) {
        activeEventsElem.innerText = eventsDatabase.length;
    }
}
let eventsDatabase = [
    { id: 1, title: 'Annual CSC Leadership Summit', date: 'March 15, 2026 • Main Auditorium', code: 'QR-CSC-8821', slots: '140 / 200' },
    { id: 2, title: 'Community Outreach Seminar', date: 'March 22, 2026 • Hall B', code: 'QR-CSC-9042', slots: '85 / 100' }
];

function initEventBackend() {
    renderEventTable();
    bindEventModalActions();
}

function renderEventTable() {
    const tbody = document.getElementById('table-event-body');
    if (!tbody) return;

    tbody.innerHTML = eventsDatabase.map(ev => `
        <tr>
            <td class="p-4 font-bold text-charcoal">${ev.title}</td>
            <td class="p-4 text-slate-500">${ev.date}</td>
            <td class="p-4"><span class="bg-emerald-50 text-emerald-700 px-2 py-1 rounded font-bold text-[10px]">${ev.code}</span></td>
            <td class="p-4 font-semibold">${ev.slots}</td>
            <td class="p-4 text-right space-x-2">
                <button onclick="deleteEvent(${ev.id})" class="text-slate-400 hover:text-red-600">Delete</button>
            </td>
        </tr>
    `).join('');
}

function bindEventModalActions() {
    const modal = document.getElementById('modal-event');
    const openBtn = document.getElementById('btn-open-event-modal');
    const closeBtn = document.getElementById('btn-close-event-modal');
    const cancelBtn = document.getElementById('btn-cancel-event-modal');
    const form = document.getElementById('form-create-event');

    const closeModal = () => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    };

    if (openBtn) openBtn.onclick = () => { modal.classList.remove('hidden'); modal.classList.add('flex'); };
    if (closeBtn) closeBtn.onclick = closeModal;
    if (cancelBtn) cancelBtn.onclick = closeModal;

    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const title = document.getElementById('input-event-title').value;
            const date = document.getElementById('input-event-date').value;
            const venue = document.getElementById('input-event-venue').value;

            eventsDatabase.push({
                id: Date.now(),
                title: title,
                date: `${date} • ${venue}`,
                code: `QR-CSC-${Math.floor(1000 + Math.random() * 9000)}`,
                slots: '0 / 100'
            });

            closeModal();
            renderEventTable();
            alert('Event successfully created and QR pass generated!');
        };
    }
}

function deleteEvent(id) {
    eventsDatabase = eventsDatabase.filter(e => e.id !== id);
    renderEventTable();
}
let attendanceLogs = [
    { name: 'Jomailyn (Student)', event: 'CSC Leadership Summit', time: '09:41:15 AM', status: 'Verified QR' },
    { name: 'Alex Rivera (Student)', event: 'CSC Leadership Summit', time: '09:38:22 AM', status: 'Verified QR' },
    { name: 'Maria Santos (Organizer)', event: 'CSC Leadership Summit', time: '09:15:04 AM', status: 'Verified QR' }
];

function initAttendanceBackend() {
    renderAttendanceTable();
    bindExportAction();
}

function renderAttendanceTable() {
    const tbody = document.getElementById('table-attendance-body');
    if (!tbody) return;

    tbody.innerHTML = attendanceLogs.map(log => `
        <tr>
            <td class="p-4 font-bold text-charcoal">${log.name}</td>
            <td class="p-4 text-slate-600">${log.event}</td>
            <td class="p-4 text-slate-500">${log.time}</td>
            <td class="p-4"><span class="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold text-[10px]">${log.status}</span></td>
        </tr>
    `).join('');
}

function bindExportAction() {
    const exportBtn = document.getElementById('btn-export-csv');
    if (exportBtn) {
        exportBtn.onclick = () => {
            alert('Exporting attendance report as CSV...');
        };
    }
}
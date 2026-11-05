let userDatabase = [
    { name: 'Zara', email: 'zara@college.edu', role: 'Participant' },
    { name: 'Prof. Jannu Rey Basarte', email: 'jannurey@zppsu.edu.com', role: 'Admin' }
];

function initUserBackend() {
    renderUserTable();
}

function renderUserTable() {
    const tbody = document.getElementById('table-users-body');
    if (!tbody) return;

    tbody.innerHTML = userDatabase.map((user, idx) => `
        <tr>
            <td class="p-4 font-bold text-charcoal">${user.name}</td>
            <td class="p-4 text-slate-500">${user.email}</td>
            <td class="p-4"><span class="bg-maroon/10 text-maroon px-2 py-1 rounded font-bold text-[10px]">${user.role}</span></td>
            <td class="p-4 text-right">
                <select onchange="updateUserRole(${idx}, this.value)" class="border border-slate-300 rounded p-1 text-xs outline-none bg-slate-50">
                    <option value="Student" ${user.role === 'Student' ? 'selected' : ''}>Student</option>
                    <option value="Admin" ${user.role === 'Admin' ? 'selected' : ''}>Admin</option>
                </select>
            </td>
        </tr>
    `).join('');
}

function updateUserRole(index, newRole) {
    userDatabase[index].role = newRole;
    renderUserTable();
}
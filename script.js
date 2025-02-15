document.addEventListener("DOMContentLoaded", async () => {
    const userList = document.getElementById("user-list");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("เกิดข้อผิดพลาดในการโหลดข้อมูล");
        const users = await response.json();
        userList.innerHTML = users.map(user => `
            <div class="user-card">
                <h2>${user.name}</h2>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <a href="user-detail.html?id=${user.id}" class="view-detail">ดูรายละเอียด</a>
            </div>
        `).join("");
    } catch (error) {
        userList.innerHTML = `<p class="error">${error.message}</p>`;
    }
});

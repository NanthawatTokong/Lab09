document.addEventListener("DOMContentLoaded", async () => {
    const userDetail = document.getElementById("user-detail");
    const viewPostsBtn = document.getElementById("view-posts");
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    if (!userId) {
        userDetail.innerHTML = "<p class='error'>ไม่พบข้อมูลผู้ใช้</p>";
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error("เกิดข้อผิดพลาดในการโหลดข้อมูลผู้ใช้");
        const user = await response.json();

        userDetail.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;

        viewPostsBtn.addEventListener("click", () => {
            window.location.href = `user-posts.html?id=${userId}`;
        });
    } catch (error) {
        userDetail.innerHTML = `<p class='error'>${error.message}</p>`;
    }
});

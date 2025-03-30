document.getElementById('loginForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "ramin" && password === "mina12") {
        alert("به پت این خوش آمدید!");
        window.location.href = "dashboard.html";
    } else {
        alert("نام کاربری یا رمز عبور اشتباه است.");
    }
});

document.getElementById('addPetBtn')?.addEventListener('click', () => {
    const petName = prompt("نام حیوان را وارد کنید:");
    const petBirthDate = prompt("تاریخ تولد حیوان (هجری شمسی) را وارد کنید:");
    const petOwner = prompt("نام مالک حیوان را وارد کنید:");

    if (petName && petBirthDate && petOwner) {
        const petList = document.getElementById('petList');
        const petRow = document.createElement('tr');
        petRow.innerHTML = `
            <td>${petName}</td>
            <td>${petBirthDate}</td>
            <td>${petOwner}</td>
            <td><button class="btn btn-danger btn-sm deletePet">حذف</button></td>
        `;
        petList.appendChild(petRow);

        petRow.querySelector('.deletePet').addEventListener('click', () => {
            petList.removeChild(petRow);
        });
    }
});

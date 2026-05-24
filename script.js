// Логика выпадающих списков
const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(btn => {
    btn.addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("show");
    });
});

// Логика мобильной кнопки
const openBtn = document.getElementById('openBtn');
const sidebar = document.getElementById('mySidebar');

openBtn.addEventListener('click', () => {
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
});

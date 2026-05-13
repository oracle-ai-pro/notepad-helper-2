function togglePanel(id) {
    const panel = document.getElementById(id);
    panel.classList.toggle('collapsed');
}

// Слушатель для текста (чтобы ловить вставку кода)
const editor = document.getElementById('main-editor');
editor.addEventListener('input', (e) => {
    // Если вставили миллиард символов, Оракул может среагировать
    console.log("Код обновлен, длина:", e.target.value.length);
});

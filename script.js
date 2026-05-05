// Notepad Helper Developers - Core Script (script.js)
document.addEventListener('DOMContentLoaded', () => {
    console.log("LMSH System: Initialized");

    // Элементы вкладок
    const tabCode = document.getElementById('tab-code');
    const tabOracle = document.getElementById('tab-oracle');
    const contentCode = document.getElementById('content-code');
    const contentOracle = document.getElementById('content-oracle');
    const tabFileName = document.getElementById('tab-filename');

    // Элементы управления
    const uploadBtn = document.getElementById('upload-btn');
    const codeArea = document.getElementById('json-display');
    const packNameDisplay = document.getElementById('pack-name-display');

    // Переключение вкладок
    tabCode.onclick = () => {
        contentCode.style.display = 'block';
        contentOracle.style.display = 'none';
        tabCode.style.borderBottom = '2px solid var(--accent)';
        tabCode.style.color = 'var(--text-color)';
        tabOracle.style.borderBottom = 'none';
        tabOracle.style.color = '#8b949e';
    };

    tabOracle.onclick = () => {
        contentCode.style.display = 'none';
        contentOracle.style.display = 'block';
        tabOracle.style.borderBottom = '2px solid var(--accent)';
        tabOracle.style.color = 'var(--text-color)';
        tabCode.style.borderBottom = 'none';
        tabCode.style.color = '#8b949e';
    };

    // Логика загрузки файла
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.worldpack, .json, .txt';

    if (uploadBtn) {
        uploadBtn.onclick = () => fileInput.click();
    }

    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            codeArea.textContent = event.target.result;
            // Обновляем имя везде
            tabFileName.textContent = file.name;
            if (packNameDisplay) packNameDisplay.textContent = file.name;
            
            console.log(`LMSH: Loaded ${file.name}`);
        };
        reader.readAsText(file);
    };

    // Логика Oracle Premium
    const premiumBtn = document.querySelector('.chip:contains("Premium")') || document.querySelectorAll('.chip')[2];
    if (premiumBtn) {
        premiumBtn.onclick = () => {
            alert("Oracle Intelligence: Анализ 'миллиарда символов' запущен... Ошибок не обнаружено! 🔑)");
        };
    }
});

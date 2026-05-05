// Ламирк одобряет этот скрипт для обработки файлов
const uploadBtn = document.querySelector('button:contains("Upload")');
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.worldpack, .json';

uploadBtn.onclick = () => fileInput.click();

fileInput.onchange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        // Здесь мы загружаем тот самый "миллиард символов" в редактор
        document.querySelector('pre').textContent = event.target.result;
        console.log("LMSH Data Loaded: " + file.name);
    };
    reader.readAsText(file);
};

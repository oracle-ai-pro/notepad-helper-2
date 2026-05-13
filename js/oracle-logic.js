const oracleInput = document.getElementById('oracle-input');
const oracleOutput = document.getElementById('oracle-output');

oracleInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const cmd = this.value.toLowerCase();
        let response = "Оракул обрабатывает запрос...";

        if (cmd.includes('void')) {
            response = "Текущая бездна установлена на -93.9. Игрок не выживет.";
        } else if (cmd.includes('3.4')) {
            response = "Лор Kosmo 3.4 загружен. Плиточная структура активна.";
        }

        const msg = document.createElement('p');
        msg.className = "oracle-msg";
        msg.innerHTML = `<strong>Вы:</strong> ${this.value}<br><strong>Оракул:</strong> ${response}`;
        oracleOutput.appendChild(msg);
        
        this.value = '';
        oracleOutput.scrollTop = oracleOutput.scrollHeight;
    }
});

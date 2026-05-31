const VirtualMachine = {
    init() {
        console.log("VM: Ядро Prestige HQ инициализировано.");
        this.watchEditor();
    },
    watchEditor() {
        const editor = document.getElementById('source-code');
        editor.addEventListener('input', (e) => {
            this.processCode(e.target.value);
        });
    },
    processCode(json) {
        try {
            const state = JSON.parse(json);
            console.log("VM: Состояние распознано", state);
            // Здесь будет логика применения параметров мира
        } catch(e) {
            // Ошибка синтаксиса, ждем завершения
        }
    }
};

VirtualMachine.init();

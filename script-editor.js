let currentForm = JSON.parse(localStorage.getItem('form_data')) || { 
    title: "Название формы", 
    description: "", 
    fields: [] 
};

function save() {
    localStorage.setItem('form_data', JSON.stringify(currentForm));
    alert("Сохранено!");
}

function add(type) {
    // Создаем объект строго по структуре
    const newField = { 
        id: Date.now(), 
        type: type, 
        label: 'Новый вопрос' 
    };
    
    currentForm.fields.push(newField); // Добавляем в массив
    save(); // Сразу сохраняем в localStorage
    render('конструктор'); // Перерисовываем
}
}

function removeField(id) {
    currentForm.fields = currentForm.fields.filter(f => f.id !== id);
    render('конструктор');
}

function render(view) {
    const app = document.getElementById('app');
    app.innerHTML = ''; // Полная очистка перед перерисовкой

    if (view === 'конструктор') {
        currentForm.fields.forEach((field, index) => {
            const card = document.createElement('div');
            card.className = 'field-card';
            // Используем уникальные типы из твоего меню
            card.innerHTML = `
                <div style="flex-grow:1">
                    <input value="${field.label}" onchange="currentForm.fields[${index}].label = this.value" style="background:transparent; border:none; color:#fff; font-weight:bold;">
                    <small style="display:block; color:#666">${field.type.toUpperCase()}</small>
                </div>
                <span class="material-symbols-rounded" style="cursor:pointer" onclick="removeField(${index})">delete</span>
            `;
            app.appendChild(card);
        });
    }
}

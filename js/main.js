'use strict';

document.addEventListener('keypress', function(e){
    if(e.which == 13){
        let input = document.getElementById('newTodo');
        addTodo(input.value);
        input.value = '';
    }
}, false);

let todos = [
    'Comprar café',
    'Trocar pilha do mouse',
    'Não usar framework no ToDo'
];

const addTodo = text => {
    if (text !== '') {
        todos.push(text)
    }
    showTodo()
};

const deleteTodo = id => {
    delete todos[id];
    showTodo()
};

const showTodo = () => {
    let list = document.getElementById('list');
    let template = '';

    list.innerHTML = '';
    for (let k in todos) {
        template += `
            <tr>
                <td>${todos[k]}</td>
                <td><button class="todo-btn-remove" onclick="deleteTodo(${k})">Remover</button></td>
            </tr>
        `;
    }
    list.innerHTML = template;
};
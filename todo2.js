(function(){

    let todos = [
        // {title:'lunch', content:'lunch with my friends'},
        // {title:'lunch', content:'lunch with my friends'},
        // {title:'lunch', content:'lunch with my friends'}
    ];

    //parts of date
    const bodyDay = document.querySelector('.body__day');
    const bodyDate = document.querySelector('.body__date');
    const todoAddBtn = document.querySelector('.todo__btn');
    const todoListPending = document.querySelector('.todo__list--pending');
    const todoInput = document.querySelector('.todo__input');

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday',];

    //local storage handler
    const localDB = {
        setItem(key, value){
            value = JSON.stringify(value);
            localStorage.setItem(key, value); //elmenti es frissiti az adatokat a localst-be
            //localDb.removeItem('todos')
        },
                // kiolvassa az adatokat localDb.getItem('todos')
        getItem(key) {
            const value = localStorage.getItem(key);
            if(!value) {
                return null;
            }
            return JSON.parse(value);
        },

        //localDb.removeItem('todos')
        removeItem(key){
            localStorage.removeItem(key);
        }
    };

    //initialization
    const init = () => {
        
        showDate();
        setListeners();
        loadExistingTodos();
        showPendingItems();
    };

    //load existing todos

    const loadExistingTodos = () => {
        const savedTodos = localDB.getItem('todos');
        if(savedTodos){
            todos = savedTodos;
        }
    if(todos && Array.isArray(todos)) {
        todos.forEach(todo => showTodo(todo));
}
    };

    //show date
    const showDate = () => {
        const currentDate = new Date();
        const day = 
        [            
                    currentDate.getMonth() +1, 
                    currentDate.getDate(),
                    currentDate.getFullYear(),
        ].map(num => num < 10 ? `0${num}` : num);
        bodyDay.textContent = dayNames[currentDate.getDay()];
        bodyDate.textContent = day.join('-');
         
    };

    //set eventListeners
    const setListeners = () => {
        todoAddBtn.addEventListener('click',addNewTodo )
    };
    //save and add todo to the database
    const addNewTodo = () => {
        
        const value = todoInput.value;
        if(value === ''){
            alert('Please type a todo.');
            return;
        }
            const todo = {
                text: value,
                done: false
            };

            todos.push(todo);

            localDB.setItem('todos', todos);
            showTodo(todo);
            todoInput.value = '';
    };


//show todo in the list

const showTodo = todo => {
    const todoItem = document.createElement('div');
    todoListPending.appendChild(todoItem);

    todoItem.innerHTML = `
    <input type="checkbox">
    <span>${todo.text}</span>
    <button>
    <i class= "fa fa-trash"></i>
    </button>
    `;
};

//pending items counter
const pendingItems = document.querySelector('.todo__number');
const showPendingItems = () => {
    if(value=== todo){
        counter++;
    }
};


    init();
    

})();
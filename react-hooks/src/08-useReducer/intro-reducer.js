
// Estado inicial de la app
const initialState = [{
    id: 1,
    todo: 'Recolectar la pierda del Alma',
    done: false
}];

// El reducer debe de recibir los argumentos de state y action
const todoReducer = (state = initialState, action = {}) => {

    if(action.type === '[TODO] add todo') {
        return [...state, action.payload]
    }

    return state; //Siempre debe de regresar el estado
}


let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
}

// NOTA: No se debe mutar el estado, sino devolver uno nuevo

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);

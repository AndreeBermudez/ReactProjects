
//Logica del Reducer

const initialState = [{
    id:1,
    todo:'Recolectar la piedra del Alma',
    done: false
}];

/**
 * @param {*} state Es el estado inicial, por defecto le pasamos un arreglo de obj
 * @param {*} action Es la accion quien va a decirle al reducer como quiero que cambie el estado
 * @returns 
 */
const todoReducer = (state = initialState, action={}) =>{

    if(action.type === '[TODO] add todo'){
        return [...state,action.payload]
    }

    return state; //Regresa un nuevo estado
}

let todos = todoReducer();

const newTodo = ({
         id:2,
         todo: 'Recolectar la piedra del poder',
         done: false
     })

const addTodoAction = {
    type:'[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos,addTodoAction);

console.log({state: todos})

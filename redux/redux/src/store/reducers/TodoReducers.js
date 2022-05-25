import {ADD_TODO, MARK_DONE, FILTER_TODO, REMOVE_TODO} from '../actions/types/index'

const removeTodo = (todos, id)=> {
    return todos = todos.filter(todo => todo.id !== id)
}

const init = {
    todos:[
        {
            "title":"Testas",
            "description": "Labai gera užduotis",
            "isComplete": false,
            "id":1234
        },
        {
            "title":"Kita",
            "description": "Labai gera kita užduotis",
            "isComplete": false,
            "id":12345
        },
    ],
    filter:'VISOS'
}
const Todos = (state=init, action) => {
    console.log(state.todos)
    switch (action.type) {
        case ADD_TODO : {
            let todos = [...state.todos];
            todos = [action.payload, ...todos]
            return {
                ...state,
                todos
            };
        }
        case MARK_DONE : {
            let todos = [...state.todos];
            todos = todos.map(todo => {
                if(todo.id === action.payload) {
                    todo.isComplete=!todo.isComplete
                }
                return todo
            })
            return {
                ...state,
                todos
            }
        }

        case FILTER_TODO : {
            return {
                ...state,
                filter:action.payload
            }
        }

        case REMOVE_TODO : {
            const todos = removeTodo(state.todos, action.payload)
            return {
                ...state,
                todos
            }
        }

        default: return state;
    }

}

export default Todos;
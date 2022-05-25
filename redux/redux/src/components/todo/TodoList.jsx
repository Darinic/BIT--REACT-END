import {ListGroup} from 'react-bootstrap'
import ToItem from './ToItem';
import {connect} from 'react-redux'
import {markDone, deleteTodo} from "../../store/actions/TodoAction"
import FilterTodo from '../../utilities/filterTodo';

const TodoList = (props) => {
    let {todos, markDone, status, deleteTodo} = props
    console.log(props)
    let filteredTodos = FilterTodo (todos,status);
    return (  
        <ListGroup>
            {
                filteredTodos.map(todo=>
                    <ToItem 
                    todo={todo}
                    key={todo.id}
                    mark={markDone}
                    remove={deleteTodo}
                    />
                    )
            }           
        </ListGroup>
    );
}
 
const mapDispatchToProps = state => ({
    todos:state.todos.todos,
    status:state.todos.filter
})

export default connect(mapDispatchToProps, {markDone, deleteTodo})(TodoList)
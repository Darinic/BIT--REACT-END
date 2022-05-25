import { ListGroup, Button } from "react-bootstrap";
import React from 'react';
import {useGlobalContext} from '../context/TasksContext'

const Task = (props) => {
const {removeTask} = useGlobalContext()
    return (  
        <ListGroup.Item>
            {props.title}:{props.desc}
            <Button className="float-end" onClick={()=>{removeTask(props.id)}}>Delete</Button>
        </ListGroup.Item>
    );
}
 
export default Task;
import {Form, Button} from 'react-bootstrap'
import React from 'react';
import {useState} from "react"
import { useGlobalContext } from '../context/TasksContext';

const AddTask = () => {
    const {addTask, openForm, closeForm} = useGlobalContext();
    const [newTask, setNewTask] =useState({
        id:Math.random().toString(16).slice(2),
        title:'',
        desc:''
    })
    const handleChange = (e) => {
        setNewTask({
            ...newTask,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler= (e) => {
        e.preventDefault()
        addTask(newTask)
        openForm()
    }

    console.log(newTask)
    return (  
        <Form onSubmit={submitHandler}>
            <Form.Group className='m-2'>
                <Form.Control 
                type="text"
                placeholder='Užduoties pavadinimas'
                value={newTask.title}
                onChange={handleChange}
                name="title"
                style={{width:'15rem'}}
                />
            </Form.Group>
            <Form.Group className='mt-2'>
                <Form.Control 
                as="textarea"
                value={newTask.desc}
                onChange={handleChange}
                name="desc"
                />
            </Form.Group>
            <Button type='submit' className='mt-2' onClick={closeForm}>
                Pridėti užduotį
            </Button>
        </Form>
    );
}
 
export default AddTask;
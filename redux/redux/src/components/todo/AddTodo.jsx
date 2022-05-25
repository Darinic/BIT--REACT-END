import { useState } from "react";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import { addTodo } from "../../store/actions/TodoAction";
import {connect} from "react-redux"


const AddTodo = (props) => {
    const [modal, setModal] = useState();
    const [task, setTask] = useState({
        title:'',
        description:''
    })

    const handleShow = () => {
        setModal(true)
    }
    const handleClose = () => {
        setModal(false)
    }

    const handleChange= (e) => {
        setTask({
            ...task,
        [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let id = parseInt(Date.now())
        const todo = {
            ...task,
            isComplete:false,
            id:id
        }
        props.addTodo(todo)
        setModal(false)
    }
    return (  
        <div>
            <Button onClick={handleShow}>
                Nauja užduotis
            </Button>
            <Modal show={modal} onHide={handleClose}>
                <Modal.Header>
                    Užduoties Sukūrimas
                </Modal.Header>
                <Form onSubmit={submitHandler}>
                <Modal.Body>
                        <FormGroup>
                            <Form.Label>Pavadinimas</Form.Label>
                            <Form.Control 
                            type="text"
                            name="title"
                            value={task.title}
                            onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Užduoties aprašymas</Form.Label>
                            <Form.Control 
                            type="textarea"
                            name="description"
                            value={task.description}
                            onChange={handleChange}
                            />
                        </FormGroup>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Uždaryti</Button>
                    <Button variant="primary" type="submit">Pridėti</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}
 
export default connect(null,{addTodo})(AddTodo);
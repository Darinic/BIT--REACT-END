import {Form, Button} from 'react-bootstrap'
import React from 'react';
import {useState} from "react"
import { useGlobalContext } from '../context/CommentContex'

const AddComment = () => {
    const {addComment, closeForm} = useGlobalContext();
    const [newComment, setNewComment] =useState({
        title:'',
        description:'',
        img:''
    })
const handleChange= (e) => {
setNewComment({
    ...newComment,
    [e.target.name]:e.target.value
})
}
const submitHandler = (e) => {
e.preventDefault()
addComment(newComment)
closeForm()
}
console.log(newComment)
    return (  
        <Form onSubmit={submitHandler}>
            <Form.Group className='m-2'>
                <Form.Control
                type='text'
                placeholder='enter your title'
                name='title'
                value={newComment.title}
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Control
                type='text'
                placeholder='enter your Description'
                name='description'
                value={newComment.description}
                onChange={handleChange}
                style={{rows:'2'}}
                />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Control
                type='text'
                placeholder='enter your image source'
                name='img'
                value={newComment.img}
                onChange={handleChange}
                />
            </Form.Group>
            <Button type='submit' className='mt-2'>
                Add a comment
            </Button>
        </Form>
    );
}
 
export default AddComment;
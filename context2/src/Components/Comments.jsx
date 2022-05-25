import React from 'react';
import { Container, Button } from 'react-bootstrap'
import AddComment from "./AddComment";
import Comment from './Comment';
import { useGlobalContext } from '../context/CommentContex';
import Spinner from "react-spinkit";

const Comments = () => {
    const { comments, openForm, isOpen } = useGlobalContext();
    console.log(comments)
    return (  
        <>
        <Container>
            <h2>Create Comment</h2>
            <div className="m-2 text-center">
          <Button variant="primary" className="mx-auto" onClick={openForm}>Add a Comment</Button>
        </div>
            {isOpen ? <AddComment/> : null}
        <div className='row' style={{columnGap:'2rem', justifyContent:'left'}}>
            {comments.length ? comments.map((comment, i) =>
            <Comment 
            key={i}
            title={comment.title}
            description={comment.description}
            url={comment.img}
            />
            ) : (
                <div style={{justifyContent:'center', display:'flex'}}>
         <Spinner name="circle" style={{ width:'190', height:'190' }} />
            </div>
            )}
            </div>
        </Container>
        </>
    );
}
 
export default Comments;
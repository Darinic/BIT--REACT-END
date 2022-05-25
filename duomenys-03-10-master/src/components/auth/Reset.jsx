import {Form, Button} from "react-bootstrap"
import {useState} from 'react'
import { resetPassword } from "../../services/authServices";


const Reset = () => {
    const [email, setEmail] = useState("");

    const submitHandler = (event) => {
        event.preventDefault()
        resetPassword(email)
    }
    
    console.log(email)
    return (  
        <>
            <h2 className="mt-3 text-center">Atstatykite savo pamirštą slaptažodį</h2>
            <Form className="mx-auto col-sm-6" onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(event) =>setEmail(event.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type='submit'>
                    Remind me
                </Button>
            </Form>
        </>
    );
}
 
export default Reset;
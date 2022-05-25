import { Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { auth, login } from '../services/authServices'
import {useAuthState} from "react-firebase-hooks/auth"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate= useNavigate()
    const [credentials, setCredentials]= useState({
        email:'',
        password:''
    })
    const [user, loading, error] = useAuthState(auth)
    useEffect(() => {
        if(loading) {
            return
        }
        if(user){ navigate('/expenses')}
    }, [user, loading])

    const handleChange = (event) => {
        setCredentials( {
            ...credentials,
            [event.target.name]:event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        login(credentials.email, credentials.password)
    }

    console.log(user)
    return (  
        <>
            <h2 className='text-center mt-3'>Login</h2>
            <Form className="col-sm-6 mx-auto" onSubmit={submitHandler}>
               <Form.Group className='mb-3'>
                   <Form.Control 
                   type="email"
                   name="email"
                   placeholder='Enter your Email'
                   value={credentials.email}
                   onChange={handleChange}
                   />
                </Form.Group> 
                <Form.Group className='mb-3'>
                   <Form.Control 
                   type="password"
                   name="password"
                   placeholder='Enter your password'
                   value={credentials.password}
                   onChange={handleChange}
                   />
                </Form.Group> 
                <Button type='submit'>Log me in</Button>
                <div>
                    <ul>
                        <li>Don't have an account? <Link to="/register">Register</Link></li>
                        <li>Forgot password? <Link to="/reset">Renew Passwod</Link></li>
                    </ul>
                </div>
            </Form>
        </>
    );
}
 
export default Login;
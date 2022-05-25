import { Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import { register } from "../../services/authServices"

const Register = () => {
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (event) => {
        setUserData({...userData,
        [event.target.name]:event.target.value     
    })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        register(userData.name,userData.email,userData.password)
    }

    console.log(userData)
    return(
        <>
            <h2 className="mt-3 text-center">Register</h2>
            <Form className="col-sm-6 mx-auto" onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="text"
                    placeholder="enter your name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    value={userData.email}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    value={userData.password}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Register</Button>
            </Form>
            <div style={{textAlign:'center'}}>
                Have an account? You can <Link to="/">Login here</Link>
            </div>
        </>
    )
}

export default Register
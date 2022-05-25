import React, { useState, useEffect } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import expenseValidation from "../../utilities/expenseValidation";
import Error from "../error/Error"
import { useParams, useNavigate } from "react-router-dom"
import * as services from '../../services/expensesServices'
import {auth} from "../../services/authServices";
import {useAuthState} from "react-firebase-hooks/auth";

function AddExpense(props) {
  const [user, loading, error] = useAuthState(auth)
  const [items, setItems] = useState({
    date: "",
    type: "",
    description: "",
    amount: "",
  });
  const [errors, setErrors] = useState('');
  const {id} = useParams()
  const navigate = useNavigate()

  console.log(`Puiku, gavau dokumento ID: ${id}`)

  useEffect(() => {
    id && services.getExpenseById(item =>setItems(item), id)
  }, [id])

  useEffect(() => {
    if(loading) return
    setItems({
      ...items,
      'uid':user.uid
    })
  }, [user])

  const handleChange = (e) => {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault()
    const validate = expenseValidation(items)
    setErrors(validate)
    if(Object.keys(errors).length !== 0){
    }
    props.onSave(items)
  }
  const updateHandler = () => {
    services.updateExpense(id, items)
    navigate("/")

  }
  return (
    <>
      <Card>
        <Card.Header>Add expense to expense list</Card.Header>
        <Card.Body>
        {errors && Object.keys(errors).map(keyName=>(<Error error={errors[keyName]} />))}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Choose date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={items.date}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel style={{paddingBottom: '45px', marginLeft: '-13px'}} label="Choose expense type"></FloatingLabel>
              <Form.Select
                value={items.type}
                name="type"
                onChange={handleChange}>
                <option>Entertainment</option>
                <option>Rent</option>
                <option>Credit</option>
                <option>Fuel</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Describe expenses"
                style={{ height: "100px" }}
                name="description"
                value={items.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Expense sum</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                value={items.amount}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            {(id)?
            <Button onClick={updateHandler}>Renew </Button>:
            <Button type="submit" className="mt-3">Save</Button>
          }
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
export default AddExpense
//https://pastebin.com/Xuc2NPdj
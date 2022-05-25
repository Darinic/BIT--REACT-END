import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AddExpense from "../addexpense/AddExpense";
import ExpensesTable from "../expensesTable/ExpensesTable";
import * as service from '../../services/expensesServices'
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from '../../services/authServices'
import { useGlobalContext } from "../../context/ExpensesContext";

export default function Expenses() {
  const {expenses, allExpenses} = useGlobalContext()
  const [user, error, loading] = useAuthState(auth)
  const [addExpense, setAddExpense] = useState(false);

  const saveExpenseHandler = (data) => {
    service.addExpense(data);
    setAddExpense(false);
  };

  useEffect( () => {
    if(loading) return 
    if(user) {
service.getAllExpenses(allExpenses, user)
    }
  }, [user, loading])

  console.log('vartotojo duomenys', user)
  return (
    <>
      {(addExpense) && <AddExpense onSave={saveExpenseHandler} />}
      <Card>
        <Card.Header>
          <Button className="btn btn-primary m-2" onClick={() => setAddExpense(true)}> Add </Button>
          <Button className="btn btn-danger" onClick={() => { setAddExpense(false); }}> Cancel </Button>
        </Card.Header>
        <Card.Header>
          <h3>Expenses list:</h3>
        </Card.Header>
        <Card.Body>
          <ExpensesTable data={expenses}/>
        </Card.Body>
      </Card>
    </>
  );
}

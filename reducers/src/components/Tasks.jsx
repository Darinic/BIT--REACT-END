import { Container, ListGroup, Button } from "react-bootstrap";
import { useGlobalContext } from "../context/TasksContext";
import AddTask from "./AddTask";
import Task from "./Task";
import React from 'react';

const Tasks = () => {
  const { tasks, openForm, isOpen } = useGlobalContext();

  console.log(tasks);
  return (
    <>
      <Container>
        <h2 className="m-5 text-center">Tasks list</h2>
        <div className="m-3 text-center">
          <Button className="mx-auto" onClick={openForm}>Add Task</Button>
        </div>
        {isOpen && <AddTask/>}
        <ListGroup>
          {tasks.length && tasks.map((task, i) => 
              <Task 
              key={i}
              id={task.id}
              title={task.title}
              desc={task.desc}
              />
          )}
        </ListGroup>
      </Container>
    </>
  );
};

export default Tasks;

import React from 'react';
// import styles from './task.module.css';
import {Card, Button, Container, Row, Col, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'



const Task = ({task, handleDeleteOneTask})=>{

    return(
        <Card style={{ width: '18rem' }}>
 
  <Card.Body>
    <Container>
      <Row>
        <Col>
        <Card.Title>Title: {task.title}</Card.Title>
        </Col>
         <Col>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        </Col>
      </Row>
    </Container>
    
    <Card.Title>Title: {task.text.slice(0, 10)}</Card.Title>
    <Card.Text>Description: {task.text} </Card.Text>
    <Button 
    variant="danger"
    onClick={()=>handleDeleteOneTask(task._id)}
    >
      <FontAwesomeIcon icon={faTrash} />
    </Button>
    <Button variant="warning" className="ml-3">
      <FontAwesomeIcon icon={faEdit} />
    </Button>
  </Card.Body>
</Card>
    )
}



export default Task;
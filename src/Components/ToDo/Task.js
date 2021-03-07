import React, {memo} from 'react';
import styles from './task.module.css';
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'



const Task = ({
  task, 
  handleDeleteOneTask,
  toggleSetRemoveTaskIds,
  disabled,
  checked,
  handleSetEditTask
})=>{
  console.log('Render');
    return(
        <Card className={`${styles.card} ${checked && styles.checked}`} 
        // onClick={()=>console.log('Click')}
        >
 
  <Card.Body className="cardBody">
    <input 
    type="checkbox" 
    onChange={()=>toggleSetRemoveTaskIds(task._id)}
    checked={checked}
    />
    <Card.Title>Title: {task.title}</Card.Title>
    <Card.Text>Description: {task.description} </Card.Text>

    <div>
      <Button 
      disabled={disabled}
    variant="danger"
    onClick={()=>handleDeleteOneTask(task._id)}
    checked={checked}
    >
      <FontAwesomeIcon icon={faTrash} />
    </Button>
    <Button 
    variant="warning" 
    className="ml-3"
    disabled={disabled}
    onClick={()=> handleSetEditTask(task)}
    >
      <FontAwesomeIcon icon={faEdit} />
    </Button>
    </div>
    
  </Card.Body>
</Card>
    )
}
Task.propTypes={
  task: PropTypes.shape({
    _id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
  }),
  disabled: PropTypes.bool.isRequired,
  handleDeleteOneTask: PropTypes.func.isRequired,
  toggleSetRemoveTaskIds: PropTypes.func.isRequired,
  checked:PropTypes.bool.isRequired,
  handleSetEditTask:PropTypes.func.isRequired
}

export default memo(Task);
import React, {memo} from 'react';
import styles from './task.module.css';
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'



const Task = ({
  task, 
  handleDeleteOneTask,
  toggleSetRemoveTaskIds,
  disabled,
  checked})=>{
  console.log('Render');
    return(
        <Card className={`${styles.card} ${checked && styles.checked}`}>
 
  <Card.Body className="cardBody">
    <input type="checkbox" onClick={()=>toggleSetRemoveTaskIds(task._id)}/>
    <Card.Title>Title: {task.text.slice(0, 10)}</Card.Title>
    <Card.Text>Description: {task.text} </Card.Text>

    <div>
      <Button 
      disabled={disabled}
    variant="danger"
    onClick={()=>handleDeleteOneTask(task._id)}
    >
      <FontAwesomeIcon icon={faTrash} />
    </Button>
    <Button 
    variant="warning" 
    className="ml-3"
    disabled={disabled}
    >
      <FontAwesomeIcon icon={faEdit} />
    </Button>
    </div>
    
  </Card.Body>
</Card>
    )
}

// class Task extends React.PureComponent{

//     // shouldComponentUpdate(nextProps,nextState){
//     //   console.log('prevProps',this.props);
//     //   console.log('nextProps', nextProps);
//     //   return true
//     // }

//   render(){
//     const {
//   task, 
//   handleDeleteOneTask,
//   toggleSetRemoveTaskIds,
//   disabled,
//   checked
//     }=this.props;

//     console.log('Render')

//     return <Card className={styles.card}>
 
//   <Card.Body className="cardBody">
//     <input type="checkbox" onClick={()=>toggleSetRemoveTaskIds(task._id)}/>
//     <Card.Title>Title: {task.text.slice(0, 10)}</Card.Title>
//     <Card.Text>Description: {task.text} </Card.Text>

//     <div>
//       <Button 
//       disabled={disabled}
//     variant="danger"
//     onClick={()=>handleDeleteOneTask(task._id)}
//     >
//       <FontAwesomeIcon icon={faTrash} />
//     </Button>
//     <Button 
//     variant="warning" 
//     className="ml-3"
//     disabled={disabled}
//     >
//       <FontAwesomeIcon icon={faEdit} />
//     </Button>
//     </div>
    
//   </Card.Body>
// </Card>

//   }
// }


export default memo (Task);
import React from 'react';
import styles from './task.module.css';


const Task = ({task, active, active2})=>{
// console.log('styles', styles)
const cls=[styles.task];
if(active){
    cls.push(styles.first);
    cls.push(styles.third);
    cls.push(styles.border)
}
if(active2)
    cls.push(styles.second);
    cls.push(styles.radius)
    return(
        <div className={cls.join(' ')}>
        {/* <div className={`${styles.task} ${active ? styles.first : ''}`}> */}
        {/* <div className={active?`${styles.task} ${styles.first}`: styles.task}> */}
            <p>
            {task}
            </p>
        </div>
    )
}



export default Task;
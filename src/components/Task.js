import React from 'react';

const Task = ({task, deleteTask, doneTask}) => {

    const ActionBtn = () => {
        return (
            <div className = 'action-btn'>
                {task.done 
                ? <p onClick = {deleteTask}>❌</p>
                : <p onClick = {doneTask}>✔️</p>}
            </div>
        )
    };

    const className = 'task ' + (task.done ? 'task-done' : '');

    return (
        <div className={className}>
            <p>{task.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    )
}
export default Task
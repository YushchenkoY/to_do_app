import React from 'react';
import Task from './components/Task'
import TaskInput from './components/TaskInput'
import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {

  constructor () {
    super();
    this.state = {
      tasks: [
        {id: uuidv4(), title: 'Create todo-react app', done: true},
        {id: uuidv4(), title: 'Make clearance app', done: false},
        {id: uuidv4(), title: 'Save app to GitHub', done: false}
      ]
    }
  }
  doneTask = id => {
    const arr = this.state.tasks.map(el => { 
      if (el.id === id) {
        return {...el, done: true}
      } 
      return el
    });
    this.setState({tasks: arr})
  }

  deleteTask = id => {
    const arr = this.state.tasks.filter(el => el.id !== id);
    this.setState({tasks: arr})
  }

  addTask = task => {
    this.setState({tasks: [...this.state.tasks, { id: uuidv4(), title: task, done: false}]});
  }

  render(){
    const {tasks} = this.state;
    const activeTasks = tasks.filter(task => !task.done)
    const doneTasks = tasks.filter(task => task.done)

    return(
      <div className = 'app'>
        <h1 className ='top'> Active tasks: {activeTasks.length}</h1>

        {[... activeTasks, ...doneTasks].map(task => (
          <Task 
            doneTask = {() => this.doneTask(task.id)} 
            deleteTask = {() => this.deleteTask(task.id)}
            task = {task} 
            key = {task.id}>
          </Task>
        ))}
        <TaskInput addTask = {this.addTask}></TaskInput>
      </div>
    )
  }



}

export default App;

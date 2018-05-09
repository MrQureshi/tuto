import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import TOdoItem from './components/TodoItem.js';
import TodoForm from './components/TodoForm.js';
import $ from 'jquery'; 

class ToDoList extends React.Component{
    constructor(){
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this); 
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.state ={
            tasks:[
                {
                    name:"buy milk",
                    completed:false
                },
                {
                    name:"Buy Cheese",
                    completed:false
                },
                {
                    name:"Buy Bread",
                    completed:false
                }],
                currentTask:''
        }
    }
    updateTask(newValue){
        this.setState({
            currentTask : newValue.target.value
        })
    }
    editTask(index, newValue){
        console.log(index, newValue);
        var tasks = this.state.tasks;
        var task = tasks[index];
        task['name'] = newValue;
        this.setState({
            tasks
        })
    }
    changeStatus(index){
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks:tasks
        })
    }
    deleteTask(index){
        console.log(index)

        let tasks = this.state.tasks;
        tasks.splice(index, 1);

        this.setState({
            tasks
        })
    }
    addTask(evt){
        evt.preventDefault();
        let tasks =  this.state.tasks;
        let currentTask =  this.state.currentTask;
        tasks.push({
            name:currentTask,
            completed:false
        })
        this.setState({
            tasks,
            currentTask:''
        })
    }
 
    render(){
        return(
            <section>
                 <TodoForm
                        currentTask = {this.state.currentTask}
                        updateTask = {this.updateTask}
                        addTask = {this.addTask}
                    />
                <ul>
                    {
                        this.state.tasks.map((task, index )=>{
                            return <TOdoItem 
                            key={index}
                            clickHandler={this.changeStatus}
                            index={index}
                            deleteTask={this.deleteTask}
                            editTask={this.editTask} 
                            detail={task} 
                            />
                        })
                    }
                </ul>
            </section>
        )
    }
}


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        $.ajax(
            {
                url:'https://jsonplaceholder.typicode.com/users',
                success:(data) =>{
                    this.setState({
                        users:data
                    })    
                }
            }
        )
    }

    render(){
        //const{users} = this.state;
        return(
             <ul>
                {
                    this.state.users.map((user)=>{
                        return <li key={user.id} >{user.name}</li>
                    })
                }
            </ul>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'))
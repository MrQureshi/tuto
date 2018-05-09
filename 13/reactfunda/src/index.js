import React from 'react';
import ReactDOM from 'react-dom';
import TOdoItem from './TOdoItem';

class Todos extends React.Component{
    constructor(){
        super();
        this.state ={
            todos: ["i'm learning reactJS", "I'm learning Rails" ]
        }
    }
    render(){
        const {todos}= this.state;
        return(
            <section>
                <form onSubmit={(e) =>{
                    const{ todos} = this.state;
                    //todos.push(this.refs.addTodo.value);
                    e.preventDefault();
                    this.setState({
                        todos: todos.concat(this.refs.addTodo.value)
                    })
                    this.refs.addTodo.value = "";
                }} >
                    <input type="text" ref="addTodo" />
                    <button type="submot">Add Todo</button>
                </form>
                <TOdoItem todos={todos} />

                
            </section>
        )
    }
}

ReactDOM.render(<Todos />, document.getElementById('root'));


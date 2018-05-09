import React from 'react';
import ReactDOM from 'react-dom';
import {style} from 'typestyle';
//import './counter.css';


const counter = style({
    fontSize:'1rem',
    padding:'.7rem',
    backgroundColor: '#ccc',
    display:'inline-block',
    border:'1px solid #eee',
    $nest:{
        "&:hover": {
            backgroundColor:"goldenrod"
        },
        '&> div':{
            backgroundColor:'blue'
        }
    }
});
const btn = style({
    backgroundColor: '#222',
    color: 'white',
    border: 'none',
    border: '1px solid #ccc',
    padding: '.3rem',
    borderRadius: '.3rem'
})



class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
        this.incrementCounter = this.incrementCounter.bind(this)
    }
    incrementCounter(){
        this.setState((prevState) => {
            return{
                count:prevState.count +1
            }
        })
    }

    render(){
        const{ count } = this.state;
        return(
            <section>
                <div className={counter}>
                    {count}
                </div>
                <button className={btn} onClick={this.incrementCounter} >
                Add Number
                </button>
            </section>
        )
    }
}



ReactDOM.render(<Counter />, document.getElementById('root'));

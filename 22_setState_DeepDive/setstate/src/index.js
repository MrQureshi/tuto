import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
    constructor(){
        super();

        this.state ={
            count :0
        }
        this.incrementCounter = this.incrementCounter.bind(this)
    }
    incrementCounter(){
    // this.setState({
    //     count:this.state.count + 1
    //     }, () =>{
    //         console.log(this.state.count);
    //     });

        this.setState((prevState)=>{
            return{
                count: prevState.count +1
            }
        })
      
    }

    render(){
        const{ count} = this.state;
        return(
            <section>
                {count}
                <button onClick={this.incrementCounter}>
                    Add Number
                </button>
            </section>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('root'));


import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default class App extends Component{
  constructor(){
    super();
    this.state={
      name:""
    }
  }
  onInputChange=(event)=>{
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = () => {
    console.log("submit")
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.name} onChange={this.onInputChange}/> 
        {/* ref={(input)=> this._name = input} /> */}
        <button disabled={this.state.name.length? false :true}  onClick={this.handleSubmit} >Submit</button>
      </div>
    )
  }
}


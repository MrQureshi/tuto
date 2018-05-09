import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Modal from 'react-modal';
// import App from './App';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            inActive: false
        }
    }
    componentWillMount(){
        Modal.setAppElement('body');
    }
    
    toggleModal=()=>{
        this.setState({
            isActive: !this.state.isActive
        })

    }
    render(){
        return(
            <section>
                <button onClick={this.toggleModal} >Show Modal</button>
                <Modal isOpen = {this.state.isActive} onRequestClose={this.toggleModal}  >
                <button onClick={this.toggleModal} >Hide Modal</button>
                    Hello From Modal
                </Modal>
            </section>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


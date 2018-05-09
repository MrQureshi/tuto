import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, browserHistory, Link, IndexRoute, Redirect} from 'react-router';

const App=()=>(
    <div>
        <h2>App</h2>
        <Link to='/about'>App Component</Link>
    </div>
);

const About = (props)=>(
    <div>
        <h2>About</h2>
        {
            props.routeParams.id
        }
    </div>
);
const NotFound = ()=>(
    <div>
        <h2>Not Found</h2>
    </div>
);

ReactDOM.render(
    <Router history={browserHistory}>
        <Redirect from='/' to='/about(/:id)' />
        <Route path='/' component={App} />
        <Route path='/about(/:id)' component={About} />
        <Route path='*' component={NotFound} />
       
            
    </Router>,
    document.getElementById('root')
)


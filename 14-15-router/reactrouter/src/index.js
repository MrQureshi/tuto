import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, browserHistory, Link, IndexRoute} from "react-router";

//import { Link } from 'react-router';

const App=()=>(
    <div>
        <h2>App</h2>
        <Link to="/about">App Component</Link>
    </div>
);

const About = (props)=>(
    <div>
        <h2>About</h2>
        <Link to="/">Home</Link>
        <div>{props.children}</div>
        <Link activeClassName="active" to="/about/sport">Sport</Link>
        {' '}
        <Link activeClassName="active" to="/about/city">City</Link>
    </div>
);
const AboutIndex = ()=>(
    <div>About Index</div>
);
const sportImage=()=>(
    <img src='http://lorempixel.com/400/200/' alt='' />
)

const cityImage=()=>(
    <img src='http://lorempixel.com/400/200/' alt='' />
)

ReactDOM.render(
   <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}>
        <IndexRoute component={AboutIndex}/>
        <Route path="sport" component={sportImage} />
        <Route path="city" component={cityImage} />
    </Route>
   </Router>, 
    document.getElementById('root')
);


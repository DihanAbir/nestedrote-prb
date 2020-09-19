import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
  } from "react-router-dom";
  

const Login = () => {
    return (
        <Router>
            <h1>login page</h1>
            
            <Link to="/signin">signin</Link>
            <br></br>
            <Link to="/signup">signup</Link>

            <hr/>

            <Route exact path="/singin" component={singin} />
            <Route exact path="/singup" component={singup} />

            

        </Router>
    );
};

function singin() {
    return (
        <h2>This i sign in page</h2>
    )
}
function singup() {
    return (
        <div>
            <h2>This i sign in page</h2>
            <h2>This i sign in page</h2>
        </div>
    )
}

export default Login; 
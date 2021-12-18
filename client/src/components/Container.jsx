import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";




function Container () {




    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="login" component={Login} />
                    <Route exact path="/user/:id" component={Dashboard} />
                    <Route path='*' />
                </Routes>
            </Router>  
        </div>
    )
}

export default Container; 
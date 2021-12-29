import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SmallCard from "./SmallCard";
import LargeCard from "./LargeCard";




function Container () {




    return (
        <div>
            <h1>I am a container!</h1>
            <SmallCard />
            <LargeCard />
            <Router>
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/user/:id" component={Dashboard} />
                    <Route path='*' />
                </Routes>
            </Router>  
        </div>
    )
}

export default Container; 
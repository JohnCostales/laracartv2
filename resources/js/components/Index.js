import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./Main/Home";

class Index extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* Routes */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/callback" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default Index;
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./Main/Home";
import Header from "./Main/Header";
import ProductByCategory from "./products/ProductByCategory";
import Detail from "./products/Detail";

class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* Routes */}
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products/:url" exact component={ProductByCategory} />
                    <Route exact path="/product/:id" component={Detail} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

// const Test = () => <h1>test</h1>;

ReactDOM.render(
    <Index />,
    document.getElementById('index')
);

export default Index;
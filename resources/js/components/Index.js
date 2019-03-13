import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./Main/Home";
import ProductByCategory from "./products/ProductByCategory";
import ProductDetail from "./products/Detail";

class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* Routes */}
                    <Route path="/" component={Home} />
                    <Route path="/products/:url" component={ProductByCategory} />
                    <Route path="/product/:id" component={ProductDetail} />
                </div>
            </Router>
        );
    }
}

const Test = () => <h1>test</h1>;

ReactDOM.render(
    <Index />,
    document.getElementById('index')
);

export default Index;
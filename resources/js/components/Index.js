import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./Main/Home";
import ProductByCategory from "./products/ProductByCategory";

class Index extends Component {
    render() {
        return (
            <Router>
               <div>
                    {/* Routes */}
                    <Route exact path="/" component={Home} />
                    <Route path="/productByCategory/:id" component={ProductByCategory} />
                    <Route path="/test" component={Test} />
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
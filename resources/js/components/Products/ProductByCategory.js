import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";


class ProductByCategory extends Component {
    render() {
        console.log('test');
        return (    
            <div>
                <h1>Hi</h1>
                {this.props.match.params.id}
            </div>
        );
    }
}


export default ProductByCategory;
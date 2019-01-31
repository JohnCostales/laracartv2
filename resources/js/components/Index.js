import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Index extends Component {
    constructor() {
        super();
        // set state to retrieve a data in an object with an empty array
        this.state = {
            products: []
        };
    }

    // Retreive data before app is rendered
    componentWillMount() {
        axios
            .get("api/index")
            .then(response => {
                this.setState({
                    products: response.data
                });
            })
            .catch(errors => {
                console.log(errors);
            });
    }

    render() {
        const { products } = this.state;
        return (
            <div className="container">
                {products.map(product => (
                    <li>{product.product_name}</li>
                ))}
            </div>
        );
    }
}
if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}

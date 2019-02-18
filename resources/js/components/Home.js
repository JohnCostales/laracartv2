import React, { Component } from "react";
import axios from "axios";
import List from "./products/List";

class Home extends Component {
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
            <div>
                <div className="container">
                    {products.map(product => (
                        <li>{product.product_name}</li>
                    ))}
                </div>
                <List />
            </div>
        );
    }
}

export default Home;

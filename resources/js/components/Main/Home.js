3
import React, { Component } from "react";

import Header from "../Main/Header";
import Products from "../products/Products";

class Home extends Component {
    render() {
        return (
            <div>
                <Products />
            </div>
        );
    }
}

export default Home;
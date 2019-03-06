import React, { Component } from "react";
import axios from "axios";
// import '.css/frontend_css/bootstrap.min.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        //Get a number of products from the API and store their information in state
        axios.get("api/index").then(response => {
            this.setState({ products: response.data });
        });
    }

    render() {
        const { products } = this.state;

        return (
            <div>
                <section>
                    <div className="Container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="left-sidebar">
                                    <h2>Category</h2>
                                </div>
                            </div>

                            <div className="col-sm-9 padding-right">
                                <div className="features_items">
                                    {/* All Items */}
                                    <h2 className="title text-center">
                                        All Items
                                    </h2>
                                    {products.map(product => {
                                        return (
                                            <div className="col-sm-4">
                                                <div className="product-image-wrapper">
                                                    <div className="single-products">
                                                        <div className="productinfo text-center">
                                                            <img
                                                                src={`images/backend_images/products/small/${
                                                                    product.image
                                                                    }`}
                                                                alt=""
                                                            />
                                                            <h2>
                                                                {
                                                                    product.product_name
                                                                }
                                                            </h2>
                                                            <p />
                                                            <a
                                                                href=""
                                                                className="btn btn-default add-to-cart"
                                                            >
                                                                <i className="fa fa-shopping-cart" />
                                                                View Product
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="choose">
                                                        <ul className="nav nav-pills nav-justified">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fa fa-plus-square" />
                                                                    Add to
                                                                    wishlist
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fa fa-plus-square" />
                                                                    Add to
                                                                    compare
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;

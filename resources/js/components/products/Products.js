import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

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
                    <Container>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="left-sidebar">
                                    <h2>Category</h2>
                                    <div
                                        className="panel-group category-products"
                                        id="accordian"
                                    >
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a
                                                        data-toggle="collapse"
                                                        data-parent="#accordian"
                                                        href="#"
                                                    >
                                                        <span className="badge pull-right">
                                                            <i className="fa fa-plus" />
                                                        </span>
                                                        Painting
                                                    </a>
                                                </h4>
                                            </div>
                                            <div
                                                id=""
                                                className="panel-collapse collapse"
                                            >
                                                <div className="panel-body">
                                                    <ul>
                                                        <li>
                                                            <a href="">Oil</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                    </Container>
                </section>
            </div>
        );
    }
}

export default Home;

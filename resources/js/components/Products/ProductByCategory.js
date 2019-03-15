import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Main/Header";
import SideBar from "../Main/SideBar";

class ProductsByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsAll: [],
            categories: [],
        };
    }

    componentDidMount() {
        const categoryUrl = this.props.match.params.url
        //Get a number of products from the API and store their information in state
        axios.get(`/api/products/${categoryUrl}`).then(response => {
            // console.log(response.data.productsAll);
            this.setState({ 
                productsAll: response.data.productsAll });
        });
    }

    render() {
        const { productsAll } = this.state;
        return (
            <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                        {/* <SideBar /> */}
                        </div>
                        <div className="col-sm-9 padding-right">
                            <div className="features_items">
                                {/* All Items */}
                                <h2 className="title text-center">
                                    All Items
                                    </h2>
                                    {productsAll.map(product => {
                                    return (
                                        <div key={product.id} className="col-sm-4">
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
                                                        <Link
                                                            to={`/product/${product.id}`}
                                                            className="btn btn-default add-to-cart"
                                                        >
                                                            <i className="fa fa-shopping-cart" />
                                                            View Product
                                                            </Link>
                                                    </div>
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
export default ProductsByCategory;
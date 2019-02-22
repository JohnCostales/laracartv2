import React from "react";
// import { BrowserRouter, Link } from "react-router-dom";
class List extends React.Component {
    render() {
        return (
            <div>
                <div className="col-sm-4">
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            <div className="productinfo text-center">
                                <img
                                    src="images/frontend_images/home/product1.jpg"
                                    alt=""
                                />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a
                                    href="#"
                                    className="btn btn-default add-to-cart"
                                >
                                    <i className="fa fa-shopping-cart" />
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;

import React from "react";
// import { BrowserRouter, Link } from "react-router-dom";
class List extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3" />

                            <div className="col-sm-9 padding-right">
                                <div className="features_items">
                                    {/* <!--features_items--> */}
                                    <h2 className="title text-center">
                                        Features Items
                                    </h2>
                                    <div className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img
                                                        src="images/frontend_images/home/product1.jpg"
                                                        alt=""
                                                    />
                                                    <h2>$56</h2>
                                                    <p>
                                                        Easy Polo Black Edition
                                                    </p>
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
                                {/* <!--features_items--> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default List;

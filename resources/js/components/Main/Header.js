import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            categories: []
        };
    }

    componentWillMount() {
        //Get a number of products from the API and store their information in state
        axios.get("api/products").then(response => {
            this.setState({ categories: response.data.categories });
        });
    }

    render() {
        const { categories } = this.state;
        return (
            <div>
                <header id="header">
                    <div className="header_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="contactinfo">
                                        <ul className="nav nav-pills">
                                            <li />
                                            <li />
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="social-icons pull-right">
                                        <ul className="nav navbar-nav" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="logo pull-left">
                                        <a href="index.html">
                                            <img
                                                src="images/frontend_images/home/logo.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="shop-menu pull-right">
                                        <ul className="nav navbar-nav" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-9">
                                    <div className="navbar-header">
                                        <button
                                            type="button"
                                            className="navbar-toggle"
                                            data-toggle="collapse"
                                            data-target=".navbar-collapse"
                                        >
                                            <span className="sr-only">
                                                Toggle navigation
                                            </span>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <div className="mainmenu pull-left">
                                        <ul className="nav navbar-nav collapse navbar-collapse">
                                            <li><Link to={`/`} className="active">Home</Link></li>
                                            <li className="dropdown"><a href="#">Shop<i className=""></i></a>
                                                <ul role="menu" className="sub-menu">
                                                    {categories.map(category => {
                                                        return (
                                                            <div key={category.id}>
                                                                <li><Link to={`/products/${category.url}`}>{category.name}</Link></li>
                                                            </div>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;

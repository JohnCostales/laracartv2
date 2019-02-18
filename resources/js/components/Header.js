import React from "react";
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
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
                    >
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
                                            <li>
                                                <NavLink exact to="/">
                                                    Home
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <Switch>
                                            <Route
                                                exact
                                                path="/"
                                                component={Home}
                                            />
                                        </Switch>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="search_box pull-right">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </BrowserRouter>
        );
    }
}

export default Header;

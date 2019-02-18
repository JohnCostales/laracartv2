import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import List from "./products/List";

class Index extends React.Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            categories: []

        };
    }

    componentDidMount() {
        //Get a number of products from the API and store their information in state
        axios.get("api/index").then(response => {
            this.setState({ categories: response.data });
        });
    }

    render() {
        const { categories } = this.state;
        return (
            <div className="left-sidebar">
                <h2>Category</h2>
                <div className="panel-group category-products" id="accordian">
                    <div className="panel panel-default">
                        {/*@foreach ($categories as $cat)*/}
                        {categories.map(category => {
                            return (
                                <div key={category.id}>
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href={'#' + category.id}>
                                                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                                {category.name}
                                            </a>
                                        </h4>
                                    </div>
                                    {/* <div id={category.id} className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <ul>
                                                @foreach ($cat->categories as $subcat)
                                                <li><Link to={`/products/${subcat.url}`}>{subcat.name}</Link></li>
                                                @endforeach
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
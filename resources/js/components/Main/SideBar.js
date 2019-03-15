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
        axios.get("api/products").then(response => {
            // console.log(response.data);
            this.setState({ categories: response.data.categories });
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
                        {categories.map(parent => {
                            return (
                                <div key={parent.id}>
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" href={'#' + parent.id}>
                                                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                                {parent.name}
                                            </a>
                                        </h4>
                                    </div>
                                    <div id={parent.id} className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <ul>
                                                {parent.categories.map(subCat => {
                                                    return(
                                                        <div key={subCat.id}>
                                                            <li>
                                                                <Link to={`/products/${subCat.url}`} key={subCat.url}>
                                                                    {subCat.name}
                                                                </Link>
                                                            </li>
                                                        </div>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
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
import React, { Component } from "react";
import axios from "axios";
// import SideBar from "../Main/SideBar";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Product Attributes
            productDetails: {},
            categories: [],
            totalStock: {},
            
            // Input values into cart
            size: '',
            price: '',
            quantity: '',
        };

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange (event) {
        this.setState({
            size: event.target.value,
            price: event.target.value,
            quantity:event.taget.value,
        })
    }

    handleAddToCart (event) {
        event.preventDefault()

        const prod = {
            product_id: this.state.productDetails.id,
            product_name: this.state.productDetails.name,
            product_code: this.state.productDetails.code,
            size: this.state.size,
            price: this.state.size,
            quantity: this.state.quantity,

        }

        // make post request
        axios.post("/api/add-cart", prod)
        .then(response => {
                console.log('Saved to Cart');
            }
        )
    }

    hasErrorFor (field) {
    return !!this.state.errors[field]
    }

    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }

    componentDidMount() {
        const productId = this.props.match.params.id
        //Get a number of products from the API and store their information in state
        axios.get(`/api/product/${productId}`).then(response => {
            // console.log(response.data.productDetails)
            this.setState({ 
                productDetails: response.data.productDetails,
                totalStock: response.data.totalStock
            });
        });
    }

    render() {
        const { productDetails, totalStock } = this.state;
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="col-sm-3">
                            {/* <SideBar /> */}
                        </div>
                        <div className="col-sm-9 padding-right">
                            <div className="product-details">
                                <div className="col-sm-5">
                                    <div className="view-product">
                                        <img src={`images/backend_images/products/small/${productDetails.image}`} alt=""/>                                        
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <form name="addToCart" id="addToCart" onSubmit={this.handleAddToCart} method="post">
                                        <div className="product-information">
                                            <h2>{productDetails.product_name}</h2>
                                            <p>Code: {productDetails.product_code}</p>
                                            <p>
                                                <select id="selSize" name="size">
                                                    <option value="">Length x Height in centimeters</option>
                                                </select>
                                            </p>
                                            <span>
                                                <span id="getPrice">EUR €{productDetails.price}</span>
                                                <label>Quantity:</label>
                                                <input type="text"
                                                    name="quantity" value={totalStock}
                                                    onChange={this.handleFieldChange}/>
                                                <button type="submit" className="btn btn-fefault cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    Add to cart
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Cart;
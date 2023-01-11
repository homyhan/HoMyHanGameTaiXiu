import React, { Component } from "react";
import {connect} from 'react-redux';
class ProductItemRedux extends Component {
  render() {
    let {item, dispatch} = this.props;
    return (
        
        <div className="card col-3" >
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              {item.description}
            </p>
            <button type="button" onClick={()=>dispatch({
              type:"ADD_TO_CART",
              payload: {product: item, quantity: 1}
            })} className="btn btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      
    );
  }
}


export default connect(null,null)(ProductItemRedux);

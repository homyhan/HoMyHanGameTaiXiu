import React, { Component } from "react";
import {connect} from 'react-redux';

class ProductItemRedux extends Component {
    
  render() {
    let {item, dispatch} = this.props
    
    return (
      <div className="card col-3" >
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            {item.description}
          </p>
          <button onClick={()=>dispatch({
            type: "ADD_TO_CART",
            payload: {product: item, quantity: 1}
          })} type="button" className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state =>{
//     return {
//         gioHang: state.gioHang.gioHang
//     }
// }

export default connect(null, null)(ProductItemRedux);

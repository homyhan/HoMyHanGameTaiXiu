import React, { Component } from "react";
import CartRedux from "./CartRedux";
import ProductListRedux from "./ProductListRedux";
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">SHOPPING ONLINE</h1>
        <button
          type="button"
          className="btn btn-primary my-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Cart ({this.props.gioHang.length})
        </button>

        <ProductListRedux></ProductListRedux>
        <CartRedux></CartRedux>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    gioHang: state.gioHang.gioHang
  }
}

export default connect(mapStateToProps, null)(Home);

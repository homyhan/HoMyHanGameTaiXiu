import React, { Component } from "react";
import CartRedux from "./CartRedux";
import ProductListRedux from "./ProductListRedux";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">SHOPING ONLINE</h1>
        <button
          type="button"
          className="btn btn-primary my-4 position-relative"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          
          Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {this.props.gioHang.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>

        <ProductListRedux></ProductListRedux>
        <CartRedux></CartRedux>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.gioHang.gioHang,
  };
};
export default connect(mapStateToProps, null)(Home);

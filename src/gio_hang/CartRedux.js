import React, { Component } from "react";
import {connect} from 'react-redux';

class CartRedux extends Component {

  totalCheckout= ()=>{
    console.log(this.props.gioHang);
    const total = this.props.gioHang.reduce((prevValue, currentItem)=>{
      return prevValue + currentItem.product.price * currentItem.quantity;
    }, 0)
    return total
  }

  renderProductItemCart =()=>{
    let {dispatch} = this.props;
    
    return this.props.gioHang.map((item)=>{
                    
      return  <tr key={item.product.id}>
                <td>{item.product.id}</td>
                <td><img style={{width: '200px'}} src={item.product.image}></img></td>
                <td>{item.product.name}</td>
                
                <td>{item.product.price}</td>
                <td>
                  <button onClick={()=>dispatch({
                    type:"DECREASE",
                    payload: item
                  })} className="btn btn-primary">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={()=>dispatch({
                    type:"INCREASE",
                    payload: item
                  })} className="btn btn-primary">+</button>
                  </td>
                <td>{item.product.price * item.quantity}</td>
                <td>
                  <button onClick={()=> dispatch({
                    type:"DELETE",
                    payload: item
                  })} className="btn btn-danger">Delete</button>
                </td>
              </tr>
    })
  }

  render() {
    // console.log(this.props.gioHang);
    let {dispatch} = this.props
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderProductItemCart()}
                  {/* {this.props.gioHang.map((item)=>{
                    
                    return  <tr key={item.product.id}>
                              <td>{item.product.id}</td>
                              <td><img style={{width: '200px'}} src={item.product.image}></img></td>
                              <td>{item.product.name}</td>
                              
                              <td>{item.product.price}</td>
                              <td>
                                <button className="btn btn-primary">-</button>
                                <span>{item.quantity}</span>
                                <button className="btn btn-primary">+</button>
                                </td>
                              <td>
                                <button className="btn btn-danger">Delete</button>
                              </td>
                            </tr>
                  })} */}
                  {/* <tr>
                    <td>{this.props.gioHang.id}</td>
                    <td>{this.props.gioHang.name}</td>
                    <td>{this.props.gioHang.price}</td>
                    <td></td>
                  </tr> */}
                </tbody>
              </table>
              <h4>Tổng tiền: {this.totalCheckout()}</h4>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={()=> dispatch({
                type:"CHECKOUT",
                payload: this.props.gioHang
              })} type="button" className="btn btn-primary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Hàm lấy state của redux biến đổi thành props của components 
const mapStateToProps = state =>{//state là state tổng của ứng dụng, chứa các state con (rootReducer)
    return { // return về props mới
        gioHang: state.gioHang.gioHang
    }
}

export default connect(mapStateToProps, null)(CartRedux);



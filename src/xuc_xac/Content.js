import React, { Component } from 'react';
import {connect} from 'react-redux';

class Content extends Component {
    
    renderAnh =()=>{
        let {arr} = this.props
        return arr.map((item, index)=>{
            return <img key={index} style={{width: 80}} src={item.hinhAnh}></img>
        })
    }
    render() {
        let{ dispatch}=this.props
        // console.log(this.props.arr);
        return (
            <div className='row text-center my-5 align-items-center'>
               
                <div className='col-4'>
                    <button onClick={()=>dispatch({
                        type:"CHANGE_SELECT_TAI",
                        payload: true
                    })} className='btnChoose'>Tài</button>
                </div>
                <div className='col-4'>
                    <div className='row justify-content-center'>
                        {this.renderAnh()}
                        
                    </div>
                </div>
                <div className='col-4'>
                    <button onClick={()=>dispatch({
                        type: "CHANGE_SELECT_XIU",
                        payload: false
                    })} className='btnChoose'>Xỉu</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state=>{
    return {arr: state.btnReducer.arr}
}

export default connect(mapStateToProps, null)(Content);
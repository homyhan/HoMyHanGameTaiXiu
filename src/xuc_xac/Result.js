import React, { Component } from 'react';
import {connect} from 'react-redux';

class Result extends Component {
    render() {
        const {select, dispatch} = this.props
        
        return (
            <div className='text-center'>
                <h2>Bạn chọn: <span className='text-danger'>{select.select ? "Tài":"Xỉu"}</span></h2>
                <h2>Số bàn thắng: <span className='text-success'>{select.soBanThang}</span></h2>
                <h2>Tổng số bàn chơi: <span className='text-primary'>{select.soBanChoi}</span></h2>
                <button onClick={()=>dispatch({
                    type: "PLAY_GAME"
                })} className='btn btn-success'>Play</button>
            </div>
        );
    }
}

const mapStateToProps = state=>{
    return {select: state.btnReducer}
}

export default connect(mapStateToProps, null)(Result);
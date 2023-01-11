import {combineReducers} from 'redux';
//==================== gio_hang ================
// import {gioHangReducer} from './gio_hang/gioHangReducer'

//==================== gio_hang_2 ================
// import {gioHangReducer} from './gio_hang_2/gioHangReducer'

//==================== xuc_xac ================
import {btnReducer} from './xuc_xac/btnReducer';

const rootReducer = combineReducers({ // store tổng của ứng dụng
    //==================== gio_hang ================
    // gioHang: gioHangReducer

    //==================== gio_hang_2 ================
    // gioHang: gioHangReducer

    //==================== xuc_xac ==================
    btnReducer

})

export default rootReducer;
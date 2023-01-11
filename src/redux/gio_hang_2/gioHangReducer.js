const initalState ={
    gioHang: []
}

export const gioHangReducer = (state=initalState, action)=>{
    const {type, payload} = action
    switch (type) {
        case "ADD_TO_CART":{
            let gioHang = [...state.gioHang];
            let productExists = gioHang.find((item)=>{
                return item.product.id === payload.product.id
            })
            if(productExists){
                productExists.quantity+=1;
            }else{
                gioHang.push(payload);
            }
            
            return {...state, gioHang}
        }
        case "DELETE":{
            let gioHang =[...state.gioHang];
            let index = gioHang.findIndex((item)=>{
                return item.product.id = payload.product.id
            })

            if(index===-1) return;
            gioHang.splice(index, 1);
            return {...state, gioHang}
        }

        case "INCREASE":{
            let gioHang=[...state.gioHang];
            let index = gioHang.findIndex((item)=>{
                return item.product.id === payload.product.id;
            })

            if(index===-1) return;
            gioHang[index].quantity+=1;
            return {...state, gioHang}
        }
        case "DECREASE":{
            let gioHang=[...state.gioHang];
            let index = gioHang.findIndex((item)=>{
                return item.product.id === payload.product.id;
            })

            if(index===-1) return;
            gioHang[index].quantity-=1;
            if(gioHang[index].quantity===0){
                gioHang.splice(index, 1);
            }
            return {...state, gioHang}
        }
    
        default:
            return {...state}
    }
}
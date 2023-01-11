const initialState = {
    select: true,
    arr:[
        {ma: 1, hinhAnh: './img/1.png'},
        {ma: 1, hinhAnh: './img/1.png'},
        {ma: 1, hinhAnh: './img/1.png'}
    ],
    soBanThang: 0,
    soBanChoi: 0
};

export const btnReducer = (state=initialState, action)=>{
    const {type, payload} = action;
    switch (type) {
        case "CHANGE_SELECT_XIU":{
            state.select = payload;
            return {...state}
        }
        case "CHANGE_SELECT_TAI":{
            state.select = payload;
            return {...state}
        }

        case "PLAY_GAME":{
            const randomArr = [];
            
            for (let i = 0; i < 3; i++) {
                const numRandom = Math.floor(Math.random() * 6+1);

                let xucXacNgauNhien = {ma: numRandom, hinhAnh: `./img/${numRandom}.png`};
                randomArr.push(xucXacNgauNhien);
                
            }
            state.arr = randomArr;

            const tongDiem = state.arr.reduce((prevValue, currentItem)=>{
                return prevValue+ currentItem.ma;
            },0)
            if((tongDiem >= 12 && state.select) || (tongDiem<11 && state.select === false)){
                state.soBanThang+=1;
            }

            console.log(tongDiem,state.select);

            state.soBanChoi+=1;

            return {...state};
        }

    
        default:
            return {...state};
    }
    
    
}
import * as actionTypes from '../constants/userinfo';

const initialState = {
    name: '郑积瑞',
    age: 25,
    sex: '男'
};

export default function userinfo(state = initialState,action){

    switch(action.type){

        case actionTypes.USERINFO_LOGIN:
            return action.data;
        case actionTypes.USERINFO_LOGOUT:
            return action.data;
        case actionTypes.USERINFO_UPATAE:
            console.log(action.data);
            return action.data;
        default :
            return state;
    }
}
import * as actionTypes from "../constants/userinfo";

export function login(data){
    return {
        type:actionTypes.USERINFO_LOGIN,
        data
    }
}

export function loginUpate(data){
    return {
        type:actionTypes.USERINFO_UPATAE,
        data
    }
}

export function loginout(data){
    return {
        type:actionTypes.USERINFO_LOGOUT,
        data
    }
}
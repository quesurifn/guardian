import axios from 'axios'


export function USER_ERROR() {
    return {
        type: "USER_ERROR"
    }
}

export function USER_SUCCESS() {
    return {
        type: "USER_SUCCESS"
    }
}

export function NAV_OPEN() {
    return {
        type: "NAV_OPEN",
        payload: true
    }
}

export function NAV_CLOSE() {
    return {
        type: "NAV_CLOSE",
        payload: false
    }
}
export function TAB_HIDE() {
    return {
        type: "TAB_CLOSE",
        payload:false
    }
}

export function TAB_SHOW() {
    return {
        type: "TAB_OPEN",
        payload:true
    }
}

export function IS_LOADING() {
    return {
        type: "IS_LOADING",
        payload:true
    }
}

export function IS_NOT_LOADING() {
    return {
        type: "IS_NOT_LOADING",
        payload: false
    }
}

export function PRODUCTS_LOADED(obj) {
    return {
        type: "PRODUCTS_LOADED",
        payload: obj
    }
}

export function PRODUCTS_ERROR(err) {
    return {
        type: "PRODUCTS_ERROR",
        payload: err
    }
}

export function ADD_TO_CART(obj) {
    return {
        type: "ADD_TO_CART",
        payload: obj
    }
}

export function REMOVE_FROM_CART(obj) {
    return {
        type: "REMOVE_FROM_CART",
        payload: obj
    }
}

export function INCREMENT_CART(obj) {
    return {
        type: "ADD_TO_CART",
        payload: obj
    }
}

export function DECREMENT_CART(obj) {
    return {
        type: "DECREMENT_CART",
        payload: obj
    }
}

export function LOAD_PRODUCTS () {
  return (dispatch) => axios.get('http://localhost:3000/api/products')
    .then(res => {
      dispatch({type: 'PRODUCTS_LOADED', payload: res.data})
    })
    .catch(err => {
      dispatch({type: "PRODUCTS_ERROR", payload: err})
    });
}
export function reducer(
    state = {
        fbkey: '',
        userSuccess: null,
        cart: [],
        nav: null,
        tab: true,
        error: {}, 
        loading: false,
        products: []
    }, action) {


    switch (action.type) {
          case "FBTOKEN": {
            return {
                ...state,
                fbkey: action.payload
            }
          }
        
        case "NAV_OPEN" : {
            return {
                ...state, 
                nav: true
            }
        }

        case "NAV_CLOSE" : {
            return {
                ...state,
                nav: false
            }
        }

        case "USER_SUCCESS" : {
            return {
                ...state, 
                userSuccess: true
            }
        }

        case "USER_ERROR" : {
            return { 
                ...state,
                userSuccess: false
            }
        }
        
        case "ADD_TO_CART" : {
            return {
                ...state,
                cart: action.payload
            }
        }
        case "TAB_CLOSE": {
            return {
                ...state,
                tab: action.payload
            }
        }

        case "TAB_OPEN": {
            return {
                ...state, 
                tab: action.payload
            }
        }

        case "PRODUCTS_LOADED": {
            return {
                ...state,
                products: action.payload
            }
        }

        case "PRODUCTS_ERROR": {
            return {
                ...state, 
                error: action.payload
            }
        }

        case "IS_LOADING": {
            return {
                ...state, 
                loading: action.payload
            }
        }

        case "IS_NOT_LOADING": {
            return {
                ...state,
                loading: action.payload
            }
        }

        case "ADD_TO_CART": {
            return {
                ...state, 
                cart: [...state.cart, action.payload]
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}
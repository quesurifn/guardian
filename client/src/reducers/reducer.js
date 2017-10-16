export function reducer(
    state = {
        userSuccess: null,
        cart: [],
        nav: null,
        tab: true,
        error: {}, 
        loading: false,
        products: []
    }, action) {


    switch (action.type) {
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

         case "ADD_TO_CART": {
           let oldState = [...state.cart]
           let index = oldState.findIndex(x => x.name === action.payload.name)



            if (index > -1) {
            oldState[index] = {...oldState[index], quantity: oldState[index].quantity + 1};
                return {...state, cart: oldState};
            } else {
                oldState.push({...action.payload, quantity: 1});
                return {...state, cart: oldState};
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

       
        case "REMOVE_FROM_CART": {
            return {
                ...state,
                cart: action.payload
            }
        }

        case "INCREMENT_CART": {
            return {
                ...state, 
                cart: action.payload
            }
        }

        case "DECREMENT_CART": {
            return {
                ...state,
                cart: action.payload
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}
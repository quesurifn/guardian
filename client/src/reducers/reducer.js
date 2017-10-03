export function reducer(
    state = {
        fbkey: '',
        userSuccess: null,
        cart: []
    }, action) {


    switch (action.type) {
          case "FBTOKEN": {
            return {
                ...state,
                fbkey: action.payload
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

        default: {
            return {
                ...state
            }
        }
    }
}
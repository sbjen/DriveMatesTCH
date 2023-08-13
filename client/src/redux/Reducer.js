//accepts states action as parameter and return new state
import { CONNECT_WALLET } from "./ActionTypes"

const initialState = {
    walletAddress: null
}

const Reducer = (state = initialState, action) => {

    switch(action.type){
        case "CONNECT_WALLET": return {
            ...state,
            walletAddress: "0xvsdv"

        }
        default: return state
    }
}

export default Reducer
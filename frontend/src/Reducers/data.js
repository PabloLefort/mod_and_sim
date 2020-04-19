import {Types} from '../Actions/data';

// create initial state for reducers
const INIT_STATE = {
    test: "Hola!",
    metodo: "ninguno"
}

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
    switch(action.type) {
        case Types.GET_DATA_SUCCESS: {
            console.log("Saludo -> ", action.payload.data.test)    
            return {
                test: action.payload.data.test
            }
        }
        case Types.SELECCIONAR_METODO: {
            console.log("método -> ", action.payload.metodo)    
            return {
                metodo: action.payload.metodo
            }
        }
        default: return state;
    }
}
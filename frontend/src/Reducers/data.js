import {Types} from '../Actions/data';

// create initial state for reducers
const INIT_STATE = {
    metodo: "euler",
    resultado: [],
}

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
    switch(action.type) {
        case Types.SELECCIONAR_METODO: {
            return {
                ...state,
                metodo: action.payload.metodo
            }
        }
        case Types.APLICAR_METODO_SUCCESS: {
            console.log("Resultado -> ", action.payload.resultado)
            return {
                ...state,
                resultado: action.payload.resultado
            }
        }
        default: return state;
    }
}
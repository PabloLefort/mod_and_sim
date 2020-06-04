import {Types} from '../Actions/data';

// create initial state for reducers
const INIT_STATE = {
    metodo: "euler",
    resultado: { data: { puntos: [] } },
    temp_grafico: null,
    otros_graficos: [],
    random: []
}

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
    switch(action.type) {
        case Types.AGREGAR_RANDOMS: { 
            return {
                ...state,
                random: action.payload.randoms
            }
        }
        case Types.CONMUTAR_GRAFICO: {
            let grafico = action.payload.grafico,
                adicionales = state.otros_graficos;
            
            let indice = adicionales.findIndex((graf) => {
                return graf.token === grafico.data.token;
            })

            if (indice === -1 && grafico.mostrar) {
                adicionales.push(grafico.data);
            } else if(!grafico.mostrar) {
                adicionales.splice(indice, 1);
            }

            return {
                ...state,
                otros_graficos: adicionales,
                temp_grafico: action.payload.grafico
            }
        }
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
// actions types is object with the
// key: GET_DATA_REQUEST -> value: describes the action
export const Types = {
    GET_DATA_REQUEST: 'get_data_request',
    GET_DATA_SUCCESS: 'get_data_success',
    SELECCIONAR_METODO: 'seleccionar_metodo',
    APLICAR_METODO_REQUEST: 'aplicar_metodo_request',
    APLICAR_METODO_SUCCESS: 'aplicar_metodo_success',
    APLICAR_METODO_FAILURE: 'aplicar_metodo_failure',
}

// function that returns an object literal 
export const getDataRequest = () => ({
    type: Types.GET_DATA_REQUEST
})
// key: payload will contain result of the api call
export const getDataSuccess = ({data}) => ({
    type: Types.GET_DATA_SUCCESS,
    payload: { data }
})

export const seleccionarMetodo = ({metodo}) => ({
    type: Types.SELECCIONAR_METODO,
    payload: { metodo }
})

export const aplicarMetodo = ({ parametros, metodo }) => ({
    type: Types.APLICAR_METODO_REQUEST,
    payload: { parametros, metodo }
})

export const aplicarMetodoSucess = ({ resultado }) => ({
    type: Types.APLICAR_METODO_SUCCESS,
    payload: { resultado }
})

export const aplicarMetodoFailure = ({ error }) => ({
    type: Types.APLICAR_METODO_FAILURE,
    payload: { error }
})
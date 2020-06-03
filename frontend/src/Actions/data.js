export const Types = {
    APLICAR_METODO_REQUEST: 'aplicar_metodo_request',
    APLICAR_METODO_SUCCESS: 'aplicar_metodo_success',
    APLICAR_METODO_FAILURE: 'aplicar_metodo_failure',
    CONMUTAR_GRAFICO: 'conmutar_grafico',
    SELECCIONAR_METODO: 'seleccionar_metodo',
}

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

export const conmutarGrafico = ({grafico}) => ({
    type: Types.CONMUTAR_GRAFICO,
    payload: { grafico }
})

export const seleccionarMetodo = ({metodo}) => ({
    type: Types.SELECCIONAR_METODO,
    payload: { metodo }
})
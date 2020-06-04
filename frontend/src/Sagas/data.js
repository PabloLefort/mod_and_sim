import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../Actions/data';
import * as api from '../Api/data';

function* aplicarMetodoRequest(action) {
    try {
        let descripcion = '';
        let post = { metodo: action.payload.metodo };
        action.payload.parametros.forEach((value, key) => { 
            post[key] = value;
            descripcion += value + ', ';
        });
        const data = yield call(api.aplicarMetodo, { post });
        yield put(actions.aplicarMetodoSucess({ resultado: {
            token: (descripcion.replace(', ', '') + post.metodo).replace(/\s/g,''), // Genero un token para que sirva de identificador en el historial
            description: descripcion.substring(0, descripcion.length - 2),
            metodo: post.metodo,
            data: data
        }}));
    }catch(e) {
        console.log(e);
        yield put(actions.aplicarMetodoFailure( {error: e} ))
    }
}
function* watchAplicarMetodo() {
    yield takeEvery(actions.Types.APLICAR_METODO_REQUEST, aplicarMetodoRequest);
}

const DataSagas = [
    fork(watchAplicarMetodo)
];

export default DataSagas;
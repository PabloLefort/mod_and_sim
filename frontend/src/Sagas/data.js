import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../Actions/data';
import * as api from '../Api/data';

function* aplicarMetodoRequest(action) {
    try {
        const formdata = action.payload.parametros;
        let post = { metodo: action.payload.metodo };
        let description = '';
        for (let pair of formdata.entries()) {
            post[pair[0]] = pair[1];
            description += pair[1] + ', ';
        }
        const data = yield call(api.aplicarMetodo, { post });
        yield put(actions.aplicarMetodoSucess({ resultado: {
            token: (description.replace(', ', '') + post.metodo).replace(/\s/g,''), // Genero un token para que sirva de identificador en el historial
            description: description.substring(0, description.length - 2),
            metodo: post.metodo,
            data: data.data
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
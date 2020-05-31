import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../Actions/data';
import * as api from '../Api/data';

function* aplicarMetodoRequest(action) {
    try {
        const formdata = action.payload.parametros;
        let post = { metodo: action.payload.metodo };
        for (let pair of formdata.entries()) {
            post[pair[0]] = pair[1];
        }
        const data = yield call(api.aplicarMetodo, { post });
        yield put(actions.aplicarMetodoSucess( {resultado: data.data} ))
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
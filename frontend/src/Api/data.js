import axios from 'axios';
import { euler, eulerMejorado, rungeKutta } from '../Utils/metodos.js'

////////// Mock adapter in the meantime //////////
import MockAdapter  from 'axios-mock-adapter';
const mock = new MockAdapter(axios);
const toNum = (n) => parseFloat(n);
mock.onPost().reply((config) => {
    let resultado;
    let values = JSON.parse(config.data);
    console.log('data values', values);
    debugger;
    switch(values.metodo) {
        case 'euler':
            resultado = euler(values.fn, toNum(values.t0), toNum(values.x0), toNum(values.tf), toNum(values.n_h_val), values.n_h === 'n');
            break;
        case 'euler mejorado':
            resultado = eulerMejorado(values.fn, toNum(values.t0), toNum(values.x0), toNum(values.tf), toNum(values.n_h_val), values.n_h === 'n');
            break;
        case 'runge-kutta':
            // fn, t0, x0, tf, n
            resultado = rungeKutta(values.fn, toNum(values.t0), toNum(values.x0), toNum(values.tf), toNum(values.n));
            break;
        default:
            resultado = euler('2t', -1, 0, 3, 0.25);
            break;
    }
    
    return [200, resultado]
});
//////////////////////////////////////////////////

export const aplicarMetodo = ({post}) => {
    return axios.post('https://www.mocky.io/v2/5e9cc58d30000057000a7f94', post)
}

export const getPosts = () => {
    return axios.get('https://www.mocky.io/v2/5e9cc58d30000057000a7f94')
}
export const createPost = ({post}) => {
    console.log("api call ->", post)
    let randomId = Math.random()*100;
    return axios.post('https://www.mocky.io/v2/5e9cc58d30000057000a7f94', {"id":randomId, "msg": post + randomId})
}
import { euler, rungeKutta, montecarlo } from '../Utils/metodos.js'

const toNum = (n) => parseFloat(n);
export const aplicarMetodo = ({post}) => {
    let resultado;
    switch(post.metodo) {
        case 'euler':
            resultado = euler(post.fn, toNum(post.t0), toNum(post.x0), toNum(post.tf), toNum(post.n_h_val), post.n_h === 'n');
            break;
        case 'euler mejorado':
            resultado = euler(post.fn, toNum(post.t0), toNum(post.x0), toNum(post.tf), toNum(post.n_h_val), post.n_h === 'n', true);
            break;
        case 'runge-kutta':
            resultado = rungeKutta(post.fn, toNum(post.t0), toNum(post.x0), toNum(post.tf), toNum(post.n_h_val), post.n_h === 'n');
            break;
        case 'montecarlo':
            // fn, a, b, ymin, ymax, n
            resultado = montecarlo(post.fn, toNum(post.a), toNum(post.b), toNum(post.ymax), toNum(post.n));
            break;
        default:
            resultado = euler('2t', -1, 0, 3, 0.25);
            break;
    }
    return resultado;
}
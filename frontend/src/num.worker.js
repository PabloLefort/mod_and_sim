import { random } from 'mathjs';

self.addEventListener("message", generarNumeros);
// 10000000 randoms en total
function generarNumeros() {
    this.postMessage(random([10000000]));
}
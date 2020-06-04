import { evaluate, random } from 'mathjs'

export const euler = function metodoEuler(fn, t0, x0, tf, step, isN, esMejorado = false) {
    let resultado = [];
    let t=t0, x=x0;
    let h = isN ? ((tf - t0) / parseFloat(step)) : step;
 
	while ((t<tf && t0<tf) || (t>tf && t0>tf)) {
        resultado.push([t, x]);
        let f0 = evaluate(fn, {t:t, x:x});
        let predictor = h * f0;
        x += esMejorado ? ((h/2) * (f0 + evaluate(fn, {t: t+h, x: x + predictor}))): predictor;
		t += h;
    }
    
    resultado.push([t, x]);
 
	return { tipo: 'diferencial', puntos: resultado };
}

export const rungeKutta = function metodoRungeKutta(fn, t0, x0, tf, step, isN) {
    let resultado = [[t0, x0]];
    let h = isN ? (tf - t0) / parseFloat(step) : step;
    let n = isN ? step : (tf - t0) / parseFloat(step)
    let t = t0, x = x0;

    for (let i = 1; i < (n + 1); i++) {
        let k1 = h * evaluate(fn, { t: t, x: x }), 
            k2 = h * evaluate(fn, { t: t + 0.5 * h, x: x + 0.5 * k1}),
            k3 = h * evaluate(fn, { t: t + 0.5 * h, x: x + 0.5 * k2}),
            k4 = h * evaluate(fn, { t: t + h, x: x + k3 });
        t = t0 + i * h;
        x = x + (k1 + k2 + k2 + k3 + k3 + k4) / 6;
        
        resultado.push([t, x]);
    }
    return { tipo: 'diferencial', puntos: resultado };
}

export const montecarlo = function metodoMontecarlo(fn, a, b, Ymax, n) {

    let aciertos = [];
    let yerros = [];
    let x, y, rand1, rand2;
    let bmenosa = b - a;

    for (let i = 0; i < n; i++) {
        rand1 = window.randoms[i] || random();
        rand2 = window.randoms[i+1] || random();
        x = a + rand1 * bmenosa;
        y = rand2 * Ymax;
        
        if (y <= evaluate(fn, { x: x })) {
            aciertos.push([x,y]);
        } else {
            yerros.push([x,y]);
        }
    }
    let areaApprox = (aciertos.length / n) * bmenosa * Ymax;
    return { tipo: 'integracion', fn: fn, a: a, b: b, ymax: Ymax, area: areaApprox.toFixed(4), aciertos: aciertos, yerros: yerros};
}
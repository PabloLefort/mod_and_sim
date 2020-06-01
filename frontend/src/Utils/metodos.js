import { evaluate } from 'mathjs'

export const euler = function metodoEuler(fn, t0, x0, tf, step, isN) {
    let resultado = [];
    let t=t0, x=x0;
    let h = isN ? ((tf - t0) / parseFloat(step)) : step;
 
	while ((t<tf && t0<tf) || (t>tf && t0>tf)) {
        console.log("\t" + t + "\t|\t" + x);
        resultado.push({ tn: t, xn: x });
        x += h*evaluate(fn, {t:t, x:x});
		t += h;
    }
    
    resultado.push({ tn: t, xn: x });
 
	return resultado;
}

export const eulerMejorado = function metodoEulerMejorado(fn, t0, x0, tf, step, isN) {
    let resultado = [];
    let t=t0, x=x0;
    let h = isN ? ((tf - t0) / parseFloat(step)) : step;
 
	while ((t<tf && t0<tf) || (t>tf && t0>tf)) {
        console.log("\t" + t + "\t|\t" + x);
        resultado.push({ tn: t, xn: x });
        let f0 = evaluate(fn, {t:t, x:x});
        let predictor = x + h * f0;
        x += ((h/2) * (f0 + evaluate(fn, {t: t+h, x: predictor})));
		t += h;
    }
    
    resultado.push({ tn: t, xn: x });
 
	return resultado;
}

export const rungeKutta = function metodoRungeKutta(fn, t0, x0, tf, n) {
    let resultado = [{ tn: t0, xn: x0 }];
    const rk4 = (fn, t0, x0, tf, n) => {
        let vt = [], vx = [];
        let h = (tf - t0) / parseFloat(n);
        let t = t0, x = x0;

        vt[0] = t;
        vx[0] = x;

        for (let i = 1; i < (n + 1); i++) {
            let k1 = h * evaluate(fn, { t: t, x: x }), 
                k2 = h * evaluate(fn, { t: t + 0.5 * h, x: x + 0.5 * k1}),
                k3 = h * evaluate(fn, { t: t + 0.5 * h, x: x + 0.5 * k2}),
                k4 = h * evaluate(fn, { t: t + h, x: x + k3 });
            vt[i] = t = t0 + i * h
            vx[i] = x = x + (k1 + k2 + k2 + k3 + k3 + k4) / 6;
            
            resultado.push({ tn: vt[i], xn: vx[i] });
        }
    }
    rk4(fn, t0, x0, tf, n);
    return resultado;
}
function verificar() {
    var txtn1 = window.document.getElementById('txtpeso');
    var txtn2 = window.document.getElementById('txtaltura');

    var txtPeso = Number(txtn1.value);
    var txtAltura = Number(txtn2.value);
    var resultado = (txtPeso / (txtAltura * txtAltura));

    var verificando = window.document.getElementById('resultado');

    if (resultado < 17) {
        verificando.innerHTML = `Seu IMC é de ${Math.round(resultado)}. Diagnóstico: Você está muito abaixo do peso!`
    } else if (resultado >= 17 && resultado <= 18.49) {
        verificando.innerHTML = `Seu IMC é de ${Math.round(resultado)}. Diagnóstico: Você está abaixo do peso!`
    } else if (resultado >= 18.5 && resultado <= 24.99) {
        verificando.innerHTML = `Seu IMC é de ${Math.round(resultado)}. Diagnóstico: Peso normal!`
    } else if (resultado >= 25 && resultado <= 29.99) {
        verificando.innerHTML = `Seu IMC é de ${Math.round(resultado)}. Diagnóstico: Você está acima do peso!`
    } else if (resultado >= 30 && resultado <= 34.99) {
        verificando.innerHTML = `Seu IMC é de ${Math.round(resultado)}. Diagnóstico: OBESIDADE I`
    } else if (resultado >= 35 && resultado <= 39.99) {
        verificando.innerHTML = `Seu IMC é de ${Math.round(resultado)}. Diagnóstico: OBESIDADE II(Severa)`
    } else if (resultado >= 40) {
        verificando.innerHTML = `Seu IMC é de ${Math.round(resultado)}. Diagnóstico: OBESIDADE III(Mórbida)`
    } else {
        verificando.innerHTML = "ERRO. TENTE NOVAMENTE!"
    }
 
}
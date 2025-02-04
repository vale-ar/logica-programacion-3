document.addEventListener("DOMContentLoaded", function () {
    const inputNumero = document.getElementById("numero");
    const botonCalcular = document.getElementById("calcular");
    const resultadoTexto = document.getElementById("resultado");

    // Función para calcular el factorial de un número
    function calcularFactorial(num) {
        if (num < 0) return "No se puede calcular el factorial de un número negativo";
        if (num === 0 || num === 1) return 1;
        
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }

    // Evento para calcular el factorial cuando se presiona el botón
    botonCalcular.addEventListener("click", function () {
        let numero = Number(inputNumero.value);
        if (isNaN(numero) || !Number.isInteger(numero)) {
            resultadoTexto.innerText = "Por favor, ingrese un número válido entero.";
            resultadoTexto.style.color = "red";
        } else {
            let resultado = calcularFactorial(numero);
            resultadoTexto.innerText = `El factorial de ${numero} es: ${resultado}`;
            resultadoTexto.style.color = "black";
        }
    });
});
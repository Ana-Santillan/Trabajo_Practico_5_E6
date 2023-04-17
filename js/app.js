let contador = document.getElementById("contador");
let tiempoRestante;
let intervalo;

document.getElementById("iniciar").addEventListener("click", function() {
tiempoRestante = document.getElementById("tiempo").value;
    intervalo = setInterval(function() {
        tiempoRestante--;
        contador.innerHTML = tiempoRestante;
        if (tiempoRestante === 0) {
                clearInterval(intervalo);
            }
        }, 1000);
    });

document.getElementById("pausar").addEventListener("click", function() {
    clearInterval(intervalo);
});

document.getElementById("reiniciar").addEventListener("click", function() {
    clearInterval(intervalo);
    document.getElementById("tiempo").value = "";
    contador.innerHTML = "";
});
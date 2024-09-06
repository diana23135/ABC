function aplicarColorAleatorio(elemento) {

    const colores = ["green", "blue", "red"];
    

    const colorAle = colores[Math.floor(Math.random() * colores.length)];
    

    elemento.style.color = colorAle;
}

const etiquetasH5 = document.querySelectorAll('h5');

etiquetasH5.forEach((h5) => {
    h5.addEventListener('click', function() {
        aplicarColorAleatorio(this); 
    });
});

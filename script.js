document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.btn-producto');
    const lista = document.getElementById('lista-compra');
    const displayTotal = document.getElementById('precio-total');
    const btnPagar = document.getElementById('btn-pagar');
    const displayFecha = document.getElementById('fecha-actual');

    let total = 0;

    // Poner la fecha
    const ahora = new Date();
    displayFecha.innerText = ahora.toLocaleString();

    // Función para cada botón
    botones.forEach(boton => {
        boton.onclick = function() {
            const nombre = boton.getAttribute('data-nombre');
            const precio = parseFloat(boton.getAttribute('data-precio'));

            // Crear el renglón en el ticket
            const li = document.createElement('li');
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.innerHTML = `<span>${nombre}</span> <span>${precio.toFixed(2)}€</span>`;
            lista.appendChild(li);

            // Sumar al total
            total = total + precio;
            displayTotal.innerText = total.toFixed(2);
        };
    });

    // Función pagar
    btnPagar.onclick = function() {
        if (total > 0) {
            alert("Pago de " + total.toFixed(2) + "€ realizado con éxito.");
            lista.innerHTML = "";
            total = 0;
            displayTotal.innerText = "0.00";
        } else {
            alert("El ticket está vacío.");
        }
    };
});
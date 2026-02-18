
const listaTicket = document.getElementById('lista-compra');
const totalDisplay = document.getElementById('precio-total');
const botonesProducto = document.querySelectorAll('.btn-producto');
const btnPagar = document.getElementById('btn-pagar');

let total = 0;

botonesProducto.forEach(boton => {
    boton.addEventListener('click', () => {
        
        const nombre = boton.getAttribute('data-nombre');
        const precio = parseFloat(boton.getAttribute('data-precio'));
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = `${nombre} - ${precio.toFixed(2)}€`;
        listaTicket.appendChild(nuevoItem);
        total += precio;
        totalDisplay.textContent = total.toFixed(2);
    });
});


btnPagar.addEventListener('click', () => {
    if (total > 0) {
        alert(`Pago realizado con éxito. Total: ${total.toFixed(2)}€`);
        
        total = 0;
        totalDisplay.textContent = "0.00";
        listaTicket.innerHTML = "";
    } else {
        alert("El carrito está vacío.");
    }
});
const carrito = {
    productos: [{
    nombre: 'papel higienico',
    unidades: 4,
    precio: 5,
    },
    { 
    nombre: 'chocolate',
    unidades: 2,
    precio: 1.5
    }],
    get precioTotal() {
    let precio = 0;
    for (let i = 0; i < this.productos. length; i++) {
    precio += this.productos[i].unidades * this.productos [i].precio;
    }
    return precio;
    }
}

//Carrito inicial
const productosIniciales = JSON.parse(JSON.stringify(carrito.productos));
console.log("Productos iniciales:", productosIniciales);
console.log("Precio total inicial:", carrito.precioTotal); // 4*5 + 2*1.5 = 20 + 3 = 23

// Modificaciones
carrito.productos[0].unidades = 2;
carrito.productos[1].precio = 2;

// Carrito modificado
console.log("Productos actualizados:", carrito.productos);
console.log("Precio total actualizado:", carrito.precioTotal); // 2*5 + 2*2 = 10 + 4 = 14

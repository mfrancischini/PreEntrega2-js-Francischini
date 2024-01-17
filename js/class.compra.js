class Compra { 
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }

    obtenerSubtotal() {
        if (this.carrito.length > 0) { 
            return this.carrito.reduce((subtotal, carrito)=> subtotal + carrito.precio, 0)
          
        }
    }
}
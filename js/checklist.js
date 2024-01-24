

function calcularTotalCarrito() {
    let total = carrito.reduce((subtotal, carrito) => subtotal + carrito.precio, 0)
    return total
}
const listaCarrito = document.querySelector(".productoCarrito");
const totalPrecio = document.querySelector("#totalCarritonav");
const totalPrecio2 = document.querySelector("#totalCarrito");
const subtotalPrecio = document.querySelector("#subtotalCarrito");
const cantidadCarrito = document.querySelector("#cantidadCarrido")

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("miCarrito"));
}

const carrito = recuperarCarrito();

function armarCarritoHTML(producto) {
    return `
      <div class="productoCarrito">
        <img src="${producto.img}" class="w-100 foto">
        <div class="nombre">
          <h6 class="font-cormorant mb-0">${producto.nombre}</h6>
        </div>
        <p class="price d-none d-md-block">$${producto.precio}</p>
        <button data-id="${producto.id_producto}" class="btnErase">X</button>
      </div>
    `;
}

function eliminarDelCarrito(prodAEliminar) {
    let productoAEliminar = prodAEliminar;
    const indice = carrito.findIndex((producto) => producto.id_producto === parseInt(productoAEliminar));
    if (indice != -1) {
        carrito.splice(indice, 1);
        localStorage.setItem("miCarrito", JSON.stringify(carrito));
        if (carrito.length === 0) {
            console.log("%cNo hay mas productos en el carrito",
                "background:linear-gradient(#000, #555); color:#ccc; padding: 5px 10px;");
        }
    } else {
        console.log(`No se encontró un producto con ID ${productoAEliminar} en el carrito.`);
    }

    // Vuelve a renderizar el carrito después de la eliminación
    renderizarCarrito();
}

function renderizarCarrito() {
    listaCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        listaCarrito.innerHTML += armarCarritoHTML(producto);
    });

    totalPrecio.textContent = calcularTotalCarrito();
    subtotalPrecio.textContent = calcularTotalCarrito();
    totalPrecio2.textContent = "$ " + parseInt(calcularTotalCarrito()); 
    cantidadCarrito.textContent = carrito.length
}

document.addEventListener("click", (event) => {
    // Verifica si el clic ocurrió en un botón con la clase "btnErase"
    if (event.target.classList.contains("btnErase")) {
        // Obtén el id del producto desde el atributo data-id del botón
        const idProductoAEliminar = event.target.getAttribute("data-id");

        // Llama a la función para eliminar el producto
        eliminarDelCarrito(idProductoAEliminar);
    }
});

// Renderiza el carrito al cargar la página
renderizarCarrito();

function calcularCantidadCarrito() {
    if (carrito.length > 0) {
        cantidadCarrito.forEach((elemento) => {
            if (elemento) { 
                elemento.textContent = carrito.length;
            }
            const totalCarrito = document.querySelector("#totalCarrito");
            if (totalCarrito) {  // Verifica si el elemento no es nulo antes de intentar acceder a 'textContent'
                totalPrecio2.textContent = "$ " + parseInt(calcularTotalCarrito());
            }
        });
    } else {
       //carrito vacio
    }
}
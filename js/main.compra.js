let carrito = recuperarCarrito();
function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("miCarrito")) ?? [];
}

const listaProductos = document.querySelector("#listaProductos");
const precioTotal = document.querySelector("#precioTotal");
function armarCompraHTML(producto) {
    return `
    <tr>
    <td><img src="${producto.img}" style="width: 50px;"></td>
    <td>
      <div>
        <h5>${producto.nombre}</h5>
      </div>
    </td>
    <td>
      <div>
        <h6 class="text-end">$${producto.precio}</h6>
      </div>
    </td>
  </tr>

    `;
}
function calcularTotalCarrito() {
    let total = carrito.reduce((subtotal, carrito) => subtotal + carrito.precio, 0)
    return total
}

function renderizarCarrito() {
    listaProductos.innerHTML = "";
    carrito.forEach((producto) => {
        listaProductos.innerHTML += armarCompraHTML(producto);
    });

    // totalPrecio.textContent = calcularTotalCarrito();
    // subtotalPrecio.textContent = calcularTotalCarrito();
    // totalPrecio2.textContent = "$ " + parseInt(calcularTotalCarrito()); 
    // cantidadCarrito.textContent = carrito.length
       precioTotal.textContent = "Precio Total $" + calcularTotalCarrito()
}
renderizarCarrito() 
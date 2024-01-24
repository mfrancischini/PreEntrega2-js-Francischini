// Array de Productos
const productos = [
    { id_producto: 1, nombre: 'Pedigree Adulto x 21 Kg', precio: 12550, id_cat: 1, id_marca: 1, img: "img/prod1.jpg" },
    { id_producto: 2, nombre: 'Bolso de Viaje para Mascotas', precio: 8990, id_cat: 2, id_marca: 2, img: "img/prod5.jpg" },
    { id_producto: 3, nombre: 'Collar Be Dog', precio: 3186, id_cat: 2, id_marca: 3, img: "img/prod6.jpg" },
    { id_producto: 4, nombre: 'Cat Chow Adultos', precio: 4578, id_cat: 1, id_marca: 4, img: "img/prod7.jpg" },
];
// // Array de Categorias
const categorias = [
    { id_cat: 1, nombre: 'Alimentos' },
    { id_cat: 2, nombre: 'Accesorios' },
];
// // Array de Marcas
// const marcas = [
//     { id_marca: 1, nombre: 'Pedigree' },
//     { id_marca: 2, nombre: 'Pet Acces' },
//     { id_marca: 3, nombre: 'Be Dog' },
//     { id_marca: 4, nombre: 'Cat Chow' },
// ];
// // Array de Carrito
function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("miCarrito"));
}

let carrito = recuperarCarrito() || [];
// // Array de Inventario
// const inventario = [
//     { id_producto: 1, stock: 10 },
//     { id_producto: 2, stock: 0 },
//     { id_producto: 3, stock: 10 },
//     { id_producto: 4, stock: 10 },
// ];
// //Funcion para listar todo el array de productos
// function listarProductos() {
//     console.log("%cLista de Productos del Shop",
//         "background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");
//     console.table(productos);
// }
// //Funcion para agregar productos al carrito
// function agregarAlCarrito() {
//     let continuar = true;
//     let precioTotal = 0
//     while (continuar) {
//         let codigo = prompt("Ingresa el código de producto:");
//         let indice = productos.findIndex((producto) => producto.id_producto == parseInt(codigo));

//         if (indice > -1 && inventario[indice].stock > 0) {
//             //consulto si el stock en mayor a cero para agregar al carrito
//             carrito.push(productos[indice]);
//             precioTotal += productos[indice].precio //Voy sumando el valor total del carrito
//             inventario[indice].stock-- //Decremento en 1 el stock en el inventario
//             console.log("%cProducto agregado al carrito.",
//                 "background:linear-gradient(#000, #555); color:#ccc; padding: 5px 10px;");
//             continuar = window.confirm('¿Desea agregar otro producto al carrito?');
//         } else {
//             console.log("%cProducto no encontrado o sin Stock",
//                 "background:linear-gradient(#FF0000, #555); color:#ccc; padding: 5px 10px;");
//             continuar = window.confirm('¿Desea intentar con otro código de producto?');
//         }
//     }
//     console.log("%cCarrito",
//         "background:linear-gradient(#000, #555); color:#ccc; padding: 5px 10px;");
//     console.table(carrito)
// }

// function agregarAlCarrito(codigo) {

//     let precioTotal = 0


//     let indice = productos.findIndex((producto) => producto.id_producto == parseInt(codigo));

//     if (indice > -1 && inventario[indice].stock > 0) {
//         //consulto si el stock en mayor a cero para agregar al carrito
//         carrito.push(productos[indice]);
//         precioTotal += productos[indice].precio //Voy sumando el valor total del carrito
//         inventario[indice].stock-- //Decremento en 1 el stock en el inventario
//         console.log("%cProducto agregado al carrito.",
//             "background:linear-gradient(#000, #555); color:#ccc; padding: 5px 10px;");
//     } else {
//         console.log("%cProducto no encontrado o sin Stock",
//             "background:linear-gradient(#FF0000, #555); color:#ccc; padding: 5px 10px;");

//     }

//     console.log("%cCarrito",
//         "background:linear-gradient(#000, #555); color:#ccc; padding: 5px 10px;");
//     console.table(carrito)

// }




// //Funcion para Finalizar la compra
// function finalizarCompra() {
//     console.clear()
//     console.table(carrito)
//     const shopping = new Compra(carrito)
//     let totalCompra = shopping.obtenerSubtotal()
//     if (totalCompra !== undefined) {
//         console.log("🛍️ El costo de tu compra es: $ " + totalCompra)
//         console.log("Muchas gracias por tu compra.")
//     }
//     else
//         console.warn("No hay ningun carrito cargado")
// }
// //Funcion para eliminar productos del carrito
// function eliminarDelCarrito() {
//     let productoAEliminar = prompt("Ingrese el ID del Producto a Eliminar:")
//     const indice = carrito.findIndex((producto) => producto.id_producto === parseInt(productoAEliminar));
//     console.clear()
//     console.table(carrito);
//     if (indice != -1) {
//         carrito.splice(indice, 1);
//         inventario[indice].stock++ //Incremento en 1 el stock del producto que elimino del carrito
//         console.log("%cElemento eliminado correctamente",
//             "background:linear-gradient(#008000, #555); color:#ccc; padding: 5px 10px;");
//         console.table(carrito);
//         if (carrito.length === 0) {
//             console.log("%cNo hay mas productos en el carrito",
//                 "background:linear-gradient(#000, #555); color:#ccc; padding: 5px 10px;");
//         } else {
//         }
//     } else {
//         console.log(`No se encontró un producto con ID ${productoAEliminar} en el carrito.`);
//     }
// }
// //Funcion para calcular el monto total del carrito

// //Funcion para listar los productos por una categoria ingresada
// function listarProductosXCategoria() {
//     let lista = prompt("Ingresar Categoría:");
//     const categoria = categorias.find((cat) => cat.nombre === lista);

//     if (categoria) {
//         const productosFiltrados = productos.filter((producto) => producto.id_cat == categoria.id_cat);

//         if (productosFiltrados.length > 0) {
//             console.clear()
//             console.log(`Productos de la categoría "${categoria.nombre}":`);
//             console.table(productosFiltrados);
//         } else {

//             console.log('No se encontraron productos para la categoría ingresada.');
//         }
//     } else {
//         console.log('Categoría no encontrada.');
//     }
// }
// //Funcion consultar el inventario de los productos del shop
// function consultarInventario() {
//     console.clear()
//     console.log("%cInventario",
//         "background:linear-gradient(#008000, #555); color:#ccc; padding: 5px 10px;");
//     productos.forEach(producto => {
//         const inventarioProducto = inventario.find(item => item.id_producto === producto.id_producto);

//         if (inventarioProducto) {
//             console.log(`Producto: ${producto.nombre}, Stock: ${inventarioProducto.stock}`);
//         } else {
//             console.log(`No hay inventario para ${producto.nombre}`);
//         }
//     });
// }
// //Funcion para listar los productos por una marca ingresada
// function listarProductosXMarca() {
//     let buscada = prompt("Ingresar Marca:");
//     const marca_buscada = marcas.find((marca) => marca.nombre === buscada);

//     if (marca_buscada) {
//         const productosFiltrados = productos.filter((producto) => producto.id_marca === marca_buscada.id_marca);

//         if (productosFiltrados.length > 0) {
//             console.clear()
//             console.log(`Productos de la marca "${marca_buscada.nombre}":`);
//             console.table(productosFiltrados);
//         } else {

//             console.log('No se encontraron productos para la marca ingresada.');
//         }
//     } else {
//         console.clear()
//         console.log('Categoría no encontrada.');
//     }
// }



const columna = document.querySelector(".columnaProductos")
function retornarProducto(producto) {
    return ` <div class="producto">
        <a href="#" class="text-decoration-none">
            <img src="${producto.img}" class="w-100 foto">
                <h6 class="font-cormorant mt-3 mb-0">${producto.nombre}</h6>
                <p class="price mt-2 mb-2">$${producto.precio}</p>
        </a>
        <a href="#" id="${producto.id_producto}" class="btn text-white py-2 px-4 mt-0">COMPRAR</a>
    </div>`

}
function calcularCantidadCarrito() {
    if (carrito.length > 0) {
        cantidadCarrito.forEach((elemento) => {
            if (elemento) { 
                elemento.textContent = carrito.length;
            }
            const totalCarrito = document.querySelector("#totalCarrito");
            if (totalCarrito) {  // Verifica si el elemento no es nulo antes de intentar acceder a 'textContent'
                totalCarrito.textContent = "$ " + parseInt(calcularTotalCarrito());
            }
        });
    } else {
       //carrito vacio
    }
}

function cargarProducto(array) {
    if (array.length > 0) {
        columna.innerHTML = ""
        array.forEach((producto) => {
            columna.innerHTML += retornarProducto(producto);
        });

        // Agrega el event listener después de cargar los productos
        columna.addEventListener("click", (event) => {
            const botonComprar = event.target.closest("a.btn.text-white.py-2.px-4.mt-0");
            if (botonComprar) {
                const productoSeleccionado = array.find((producto) => producto.id_producto === parseInt(botonComprar.id));

                if (productoSeleccionado) {
                    carrito.push(productoSeleccionado);
                    localStorage.setItem("miCarrito", JSON.stringify(carrito))
                    calcularCantidadCarrito();
                   
                } else {
                    console.error("Producto no encontrado.");
                }
            }
        });
    } else {
        // Manejar el caso cuando no hay productos
    }
}

cargarProducto(productos);
function calcularTotalCarrito() {
    let total = carrito.reduce((subtotal, carrito) => subtotal + carrito.precio, 0)
    return total
}
const imagenesCarrito = document.querySelectorAll("button.btn.cart");
imagenesCarrito.forEach((imagenCarrito) => {
    imagenCarrito.addEventListener("mousemove", () => {
        if (carrito.length > 0) {
            imagenCarrito.title = carrito.length + " productos en carrito";

        } else {
            imagenCarrito.title = "Carrito Vacío";
        }
    });
    imagenCarrito.addEventListener("click", () => {
        if (carrito.length > 0) {
            window.location.href = "carrito.html";

        } else {
            imagenCarrito.title = "Carrito Vacío";
        }
    });
});



const filtroCatAlimentos = document.querySelector("#cat_alimentos");
const filtroCatAccesorios = document.querySelector("#cat_accesorios");
filtroCatAlimentos.addEventListener("click", () => {


    if (productos.length > 0) {
        columna.innerHTML = ''
        productos.forEach((producto) => {
            if (producto.id_cat === 1) {

                columna.innerHTML += retornarProducto(producto)
            }
        });

    }
    else { }

});
filtroCatAccesorios.addEventListener("click", () => {
    if (productos.length > 0) {
        columna.innerHTML = ''
        productos.forEach((producto) => {
            if (producto.id_cat === 2) {

                columna.innerHTML += retornarProducto(producto)
            }
        });

    }
    else { }
});

const cantidadCarrito = document.querySelectorAll(".countItem")




const botonesComprar = document.querySelectorAll("a.btn.text-white.py-2.px-4.mt-0");
const claseListaProductos = document.querySelector("#lista-lista");
const listarProductos = document.querySelector("#idClassProductos");

claseListaProductos.addEventListener("click", () => {
    event.preventDefault();
    listarProductos.classList.toggle("lista");
});

function ordenarProductosPorPrecioMenor() {
    const productosOrdenados = productos.slice();
    productosOrdenados.sort((a, b) => a.precio - b.precio);
    return productosOrdenados
}

function ordenarProductosPorPrecioMayor() {
    const productosOrdenados = productos.slice()
    productosOrdenados.sort((a, b) => b.precio - a.precio);
    return productosOrdenados
}

const selectorOrden = document.querySelector("#selectorOrden")

selectorOrden.addEventListener("click", () => {
    const ordenSeleccionado = selectorOrden.value

    if (ordenSeleccionado === '1') {

        const arrayordenado = ordenarProductosPorPrecioMenor()
        columna.innerHTML = ''
        if (arrayordenado.length > 0) {

            arrayordenado.forEach((producto) => {
                columna.innerHTML += retornarProducto(producto)
            });

        }
        else { console.log("ERROR") }
    }
    else {
        console.log("ERROR")
    }
});

const inputBuscar = document.querySelector("#campoABuscar")
inputBuscar.addEventListener("input",(e)=>{
    console.clear()
    const resultado = productos.filter((producto)=>producto.nombre.toUpperCase().includes(inputBuscar.value.trim().toUpperCase()))

    if(inputBuscar.value.trim() !==""){
      cargarProducto(resultado)
    }

})


function limpiarCarrito() {
    localStorage.removeItem("miCarrito");
    carrito = []
    calcularCantidadCarrito()
    location.reload(true);
}

const borradoCarrito = document.querySelector("#borrarCarrito")
borradoCarrito.addEventListener("click",(e)=>{
    limpiarCarrito()

})
calcularCantidadCarrito()
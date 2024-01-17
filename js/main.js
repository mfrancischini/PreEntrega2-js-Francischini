// Array de Productos
const productos = [
    { id_producto: 1, nombre: 'Pedigree Adulto x 21 Kg', precio: 12550, id_cat: 1, id_marca: 1 },
    { id_producto: 2, nombre: 'Bolso de Viaje para Mascotas', precio: 8990, id_cat: 2, id_marca: 2 },
    { id_producto: 3, nombre: 'Collar Be Dog', precio: 3186, id_cat: 2, id_marca: 3 },
    { id_producto: 4, nombre: 'Cat Chow Adultos', precio: 4578, id_cat: 1, id_marca: 4 },
];
// Array de Categorias
const categorias = [
    { id_cat: 1, nombre: 'Alimentos' },
    { id_cat: 2, nombre: 'Accesorios' },
];
// Array de Marcas
const marcas = [
    { id_marca: 1, nombre: 'Pedigree' },
    { id_marca: 2, nombre: 'Pet Acces' },
    { id_marca: 3, nombre: 'Be Dog' },
    { id_marca: 4, nombre: 'Cat Chow' },
];
// Array de Carrito
const carrito = [];
// Array de Inventario
const inventario = [
    { id_producto: 1, stock: 10 },
    { id_producto: 2, stock: 0 },
    { id_producto: 3, stock: 10 },
    { id_producto: 4, stock: 10 },
];
//Funcion para listar todo el array de productos
function listarProductos() {
    console.log("%cLista de Productos del Shop",
        "background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");
    console.table(productos);
}
//Funcion para agregar productos al carrito
function agregarAlCarrito() {
    let continuar = true;
    let precioTotal = 0
    while (continuar) {
        let codigo = prompt("Ingresa el código de producto:");
        let indice = productos.findIndex((producto) => producto.id_producto == parseInt(codigo));

        if (indice > -1 && inventario[indice].stock > 0) {
            //consulto si el stock en mayor a cero para agregar al carrito
            carrito.push(productos[indice]);
            precioTotal += productos[indice].precio //Voy sumando el valor total del carrito
            inventario[indice].stock-- //Decremento en 1 el stock en el inventario
            console.log("%cProducto agregado al carrito.",
                "background:linear-gradient(#000, #555); color:#ccc; padding: 5px 10px;");
            continuar = window.confirm('¿Desea agregar otro producto al carrito?');
        } else {
            console.log("%cProducto no encontrado o sin Stock",
                "background:linear-gradient(#FF0000, #555); color:#ccc; padding: 5px 10px;");
            continuar = window.confirm('¿Desea intentar con otro código de producto?');
        }
    }
    console.log("%cCarrito",
        "background:linear-gradient(#000, #555); color:#ccc; padding: 5px 10px;");
    console.table(carrito)
}

//Funcion para Finalizar la compra
function finalizarCompra() {
    console.clear()
    console.table(carrito)
    const shopping = new Compra(carrito)
    let totalCompra = shopping.obtenerSubtotal()
    if (totalCompra !== undefined) {
        console.log("🛍️ El costo de tu compra es: $ " + totalCompra)
        console.log("Muchas gracias por tu compra.")
    }
    else
        console.warn("No hay ningun carrito cargado")
}
//Funcion para eliminar productos del carrito
function eliminarDelCarrito() {
    let productoAEliminar = prompt("Ingrese el ID del Producto a Eliminar:")
    const indice = carrito.findIndex((producto) => producto.id_producto === parseInt(productoAEliminar));
    console.clear()
    console.table(carrito);
    if (indice != -1) {
        carrito.splice(indice, 1);
        inventario[indice].stock++ //Incremento en 1 el stock del producto que elimino del carrito
        console.log("%cElemento eliminado correctamente",
            "background:linear-gradient(#008000, #555); color:#ccc; padding: 5px 10px;");
        console.table(carrito);
        if (carrito.length === 0) {
            console.log("%cNo hay mas productos en el carrito",
                "background:linear-gradient(#000, #555); color:#ccc; padding: 5px 10px;");
        } else {
        }
    } else {
        console.log(`No se encontró un producto con ID ${productoAEliminar} en el carrito.`);
    }
}
//Funcion para calcular el monto total del carrito
function calcularTotalCarrito() {
    let total = carrito.reduce((subtotal, carrito) => subtotal + carrito.precio, 0)
    console.clear()
    console.log("Total del Carrito:", total)
}
//Funcion para buscar un producto en el shop
function buscarProducto() {
    let busqueda = prompt("Ingrese el Producto a Buscar:")
    let productoBuscado = productos.filter((producto) => producto.nombre.toUpperCase().includes(busqueda.toUpperCase()))
    if (productoBuscado.length > 0) {
        console.log("%cProducto Encontrado",
            "background:linear-gradient(#008000, #555); color:#ccc; padding: 5px 10px;");
        console.table(productoBuscado)
    }
    else {
        console.log("%cProducto NO Encontrado",
            "background:linear-gradient(#FF0000, #555); color:#ccc; padding: 5px 10px;");
    }
}
//Funcion para listar los productos por una categoria ingresada
function listarProductosXCategoria() {
    let lista = prompt("Ingresar Categoría:");
    const categoria = categorias.find((cat) => cat.nombre === lista);

    if (categoria) {
        const productosFiltrados = productos.filter((producto) => producto.id_cat == categoria.id_cat);

        if (productosFiltrados.length > 0) {
            console.clear()
            console.log(`Productos de la categoría "${categoria.nombre}":`);
            console.table(productosFiltrados);
        } else {

            console.log('No se encontraron productos para la categoría ingresada.');
        }
    } else {
        console.log('Categoría no encontrada.');
    }
}
//Funcion consultar el inventario de los productos del shop
function consultarInventario() {
    console.clear()
    console.log("%cInventario",
        "background:linear-gradient(#008000, #555); color:#ccc; padding: 5px 10px;");
    productos.forEach(producto => {
        const inventarioProducto = inventario.find(item => item.id_producto === producto.id_producto);

        if (inventarioProducto) {
            console.log(`Producto: ${producto.nombre}, Stock: ${inventarioProducto.stock}`);
        } else {
            console.log(`No hay inventario para ${producto.nombre}`);
        }
    });
}
//Funcion para listar los productos por una marca ingresada
function listarProductosXMarca() {
    let buscada = prompt("Ingresar Marca:");
    const marca_buscada = marcas.find((marca) => marca.nombre === buscada);

    if (marca_buscada) {
        const productosFiltrados = productos.filter((producto) => producto.id_marca === marca_buscada.id_marca);

        if (productosFiltrados.length > 0) {
            console.clear()
            console.log(`Productos de la marca "${marca_buscada.nombre}":`);
            console.table(productosFiltrados);
        } else {

            console.log('No se encontraron productos para la marca ingresada.');
        }
    } else {
        console.clear()
        console.log('Categoría no encontrada.');
    }
}
//Funcion para listar ordenado de Menor a Mayor los productos del shop
function ordenarProductosPorPrecioMenor() {
    const productosOrdenados = productos.slice();
    productosOrdenados.sort((a, b) => a.precio - b.precio);
    console.clear()
    console.log("%cLista de Productos del Shop Ordenados x Precio de Menor a Mayor",
        "background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");
    console.table(productosOrdenados);
}
//Funcion para listar ordenado de Mayor a Menor los productos del shop
function ordenarProductosPorPrecioMayor() {
    const productosOrdenados = productos.slice()
    productosOrdenados.sort((a, b) => b.precio - a.precio);
    console.clear()
    console.log("%cLista de Productos del Shop Ordenados x Precio de Mayor a Menor",
        "background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");
    console.table(productosOrdenados);
}
//Funcion para comenrzar con el programa
function realizarCarrito() {
    while (opcion !== "0") {
        opcion = prompt("Ingresa el número de la opción que deseas seleccionar:");

        switch (opcion) {
            case "1":
                listarProductos();
                break;
            case "2":
                agregarAlCarrito();
                break;
            case "3":
                calcularTotalCarrito();
                break;
            case "4":
                eliminarDelCarrito();
                break;
            case "5":
                buscarProducto();
                break;
            case "6":
                listarProductosXCategoria();
                break;
            case "7":
                listarProductosXMarca();
                break;
            case "8":
                ordenarProductosPorPrecioMenor();
                break;
            case "9":
                ordenarProductosPorPrecioMayor();
                break;
            case "10":
                consultarInventario();
                break;
            case "11":
                finalizarCompra()
                break;
            case "0":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida");
        }
    }

}
console.log('Bienvenidos a Gala - Shop');
let opcion;
console.log('-------------------------------');
let comenzar = true;
while (comenzar) {
    let continuar = window.confirm('¿Desea comenzar con el Programa?');
    if (continuar) {
        realizarCarrito();
    } else {
        comenzar = false;
    }
}

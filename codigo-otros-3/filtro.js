// Tenemos una lista de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Se renombra constante para mejor entendimiento
const listaDeProductos = document.getElementById("lista-de-productos");

// Se añade la función para mostrar los productos
const displayProductos = (productos) => {
  listaDeProductos.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos elementos

  // Se renombra d a nuevoDiv para mejor entendimiento
  productos.forEach(producto => {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("producto");

    //Se renombra ti a titulo para mejor entendimiento
    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    nuevoDiv.appendChild(titulo);
    nuevoDiv.appendChild(imagen);

    listaDeProductos.appendChild(nuevoDiv);
  });
};

// Se llama la funcion para mostrar los productos
displayProductos(productos);

// Se añade ID a HTML, ya que no estaba declarado
const botonDeFiltro = document.getElementById("filtrar");

// se agrega en el boton de filtro Inpufiltro para hacer referncia al ID del botón
botonDeFiltro.onclick = () => {
  const inputFiltro = document.getElementById("filtro");

  //Se convierte el texto ingresado en el input a minisculas para que el resultado siga coincidiendo 
  const texto = inputFiltro.value.trim().toLowerCase();
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
};

// Se añaden LowerCase para que el tipo y color de zapatos se manejen en minusculas
const filtrado = (productos, texto) => {
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto)
  );
};

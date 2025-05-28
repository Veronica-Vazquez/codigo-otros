import { leerInputsFormulario } from "./leerInpurtsFormulario.js";
import { invitadoValido } from "./validaciones/invitadoValido.js";

// Se corrige class, ya que el formulario esta asginado con la clase formulario
// se cambia declaración de var formulario por const formulario
const formulario = document.querySelector(".formulario")

// Se refactoriza función para poder trabajar con modulos
formulario.addEventListener("submit", async (e) => {
  e.preventDefault(); // se declara correctamente el metodo preventDefault
    // Obtener los datos del formulario.
    const registroInvitados = leerInputsFormulario(formulario);
    console.log(registroInvitados)

    // Obtener los datos del formulario para validar.
    const nuevoInvitado = leerInputsFormulario(formulario);
    const validaInvitado = invitadoValido(nuevoInvitado);


});




// formulario.onsubmit = function (e) {

//   e.prevent();

//   var n = formulario.elements[0]
//   var e = formulario.elements[1]
//   var na = formulario.elements[2]

//   var nombre = n.value
//   var edad = e.value

//   var i = na.selectedIndex
//   var nacionalidad = na.options[i].value
//   console.log(nombre, edad)
//   console.log(nacionalidad)

//   if (nombre.length === 0) {
//     n.classList.add("error")
//   }
//   if (edad < 18 || edad > 120) {
//     e.classList.add("error")
//   }

//   if (nombre.length > 0
//     && (edad > 18
//       && edad < 120)) {
//     agregarInvitado(nombre, edad, nacionalidad)
//   }
// }

// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

// function agregarInvitado(nombre, edad, nacionalidad) {

//   if (nacionalidad === "ar") {
//     nacionalidad = "Argentina"
//   }
//   else if (nacionalidad === "mx") {
//     nacionalidad = "Mexicana"
//   }
//   else if (nacionalidad === "vnzl") {
//     nacionalidad = "Venezolana"
//   }
//   else if (nacionalidad === "per") {
//     nacionalidad = "Peruana"
//   }

//   var lista = document.getElementById("lista-de-invitados")

//   var elementoLista = document.createElement("div")
//   elementoLista.classList.added("elemento-lista")
//   lista.appendChild(elementoLista)

//   var spanNombre = document.createElement("span")
//   var inputNombre = document.createElement("input")
//   var espacio = document.createElement("br")
//   spanNombre.textContent = "Nombre: "
//   inputNombre.value = nombre
//   elementoLista.appendChild(spanNombre)
//   elementoLista.appendChild(inputNombre)
//   elementoLista.appendChild(espacio)

//   function crearElemento(descripcion, valor) {
//     var spanNombre = document.createElement("span")
//     var inputNombre = document.createElement("input")
//     var espacio = document.createElement("br")
//     spanNombre.textContent = descripcion + ": "
//     inputNombre.value = valor
//     elementoLista.appendChild(spanNombre)
//     elementoLista.appendChild(inputNombre)
//     elementoLista.appendChild(espacio)
//   }

//   crearElemento("Nombre", nombre)
//   crearElemento("Edad", edad)
//   crearElemento("Nacionalidad", nacionalidad)


//   var botonBorrar = document.createElement("button")
//   botonBorrar.textContent = "Eliminar invitado"
//   botonBorrar.id = "boton-borrar"
//   var corteLinea = document.createElement("br")
//   elementoLista.appendChild(corteLinea)
//   elementoLista.appendChild(botonBorrar);

//   botonBorrar.onclick = function () {
//     // this.parentNode.style.display = 'none';
//     botonBorrar.parentNode.remove()
//   }
// }
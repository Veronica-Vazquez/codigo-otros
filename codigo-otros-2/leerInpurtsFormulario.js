
const leerInputsFormulario = ( formulario )=>{
    const invitado = {
        nombre : formulario.elements["name"].value,
        edad : formulario.elements["age"].value,
        nacionalidad : formulario.elements["nationality"].value
    }
    console.table(invitado);
    return invitado;
}
export { leerInputsFormulario };
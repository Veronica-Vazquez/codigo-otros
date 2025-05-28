const validaNombre = (nombre) => {
    const result = {
        esValido: true,
        errors: []
    };

    if( nombre === "" ){
        result.esValido = false;
        alert("El nombre no debe estar vacío");
    } else if (nombre.length < 3 ) {
        result.esValido = false;
        alert("El nombre debe tener al menos 3 caracteres");
    }

    return result;

}

export { validaNombre };
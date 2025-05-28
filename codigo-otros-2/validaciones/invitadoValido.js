import { validaNombre } from "./validaNombre.js";

const invitadoValido = (invitado) => {
    const result = {
        esValido: true,
        errors: []
    };

    const validacionNombre = validaNombre(invitado.nombre);

    /* 
   Validar todos los atributos del usuario 
   */
    if (validacionNombre.isValid === false) {
        result.isValid = false;
        result.errors.push(validacionNombre.errors);
    }
}

export { invitadoValido };
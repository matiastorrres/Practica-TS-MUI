/*configuracion de yup que nos va a permitir validar determinados argumentos */
import * as yup from "yup";

export const loginValidate = yup.object().shape({
  username: yup.string().trim().email().required("El username es requerido"),
  password: yup.string().trim().required("El password es requerido"),
});

import { lazy } from "react";

//a la primera pagina no es necesario usar el lazy
export { Home } from "./Home";
//lazy load lee la exportacion por default
//la exportacion por defecto lee el archivo donde esta toda la informacion de nuestro componentes
// en cambio la exportacion normal podemos exportar todo o componentes por componente.
export const Login = lazy(() => import("./Login"));
export const CharacterPage = lazy(
  () => import("./CharacterPage/CharacterPage")
);

// No hay que implementar siempre lazy load en todos lados

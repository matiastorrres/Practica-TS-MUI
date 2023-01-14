import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

//creamos instancia con axios, esto me permite pegarle a la url de la api
//ponerlo en practica la proxima vez
export const instance = axios.create({
  baseURL: BASE_URL,
});

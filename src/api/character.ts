import { instance } from "./base.api";

const enpoint = "character";

//esta va a ser la seccion de character, aca podemos traer un monton de cosas, por eso hacemos un objeto.
//tener en cuenta como los declara codrr
export const characters = {
  getAll: function (page: number = 1) {
    return instance.get(enpoint, { params: { page } });
  },
  getById: function (id: string | undefined) {
    return instance.get(`${enpoint}/${id}`);
  },
};

import funciones from '../src/data.js';


const pokefi = [{ name: "celeri", type: "water" }, { name: "asa", type: "water" }, { name: "pikachu", type: "poison" } ];
const pokefinum= [{ num: "001"}, { num: "251"}, { num: "150"}]
describe('objeto', () => {
  it('es un objeto', () => {
    expect(typeof funciones).toBe('object');
  });

  describe('ordenarAZ', () => {    //describe la funcion
    it('se espera una funcion', () => {    // it lo que se espera como comentario 
      expect(typeof funciones.ordenarAZ).toBe('function'); // expect funcion como talñ funcion q traere de data
    });

    it('ordenar de az', () => {
      expect(funciones.ordenarAZ(pokefi)).toEqual([{ name: "asa", type: "water" }, { name: "celeri", type: "water" }, { name: "pikachu", type: "poison" }]); // expect lo que recibe y tobe es lo que se espera
    });
  });

  describe('ordenarZA', () => {    //describe la funcion
    it('se espera una funcion', () => {    // it lo que se espera como comentario 
      expect(typeof funciones.ordenarZA).toBe('function'); // expect funcion como tal funcion q traere de data
    });

    it('ordenar de za', () => {
      expect(funciones.ordenarZA(pokefi)).toEqual([{ name: "pikachu", type: "poison" } , { name: "celeri", type: "water" },{ name: "asa", type: "water" }]); // expect lo que recibe y tobe es lo que se espera
    });
   });
  describe('ordenarnum', () => {    //describe la funcion
    it('se espera una funcion', () => {    // it lo que se espera como comentario 
      expect(typeof funciones.ordenarnum).toBe('function'); // expect funcion como talñ funcion q traere de data
    });

    it('ordenarnum', () => {
      expect(funciones.ordenarnum(pokefinum)).toEqual([1, 150, 251]); // expect lo que recibe y tobe es lo que se espera
    });
  });
  describe('revenum', () => {    //describe la funcion
    it('se espera una funcion', () => {    // it lo que se espera como comentario 
      expect(typeof funciones.revenum).toBe('function'); // expect funcion como talñ funcion q traere de data
    });

    it('revenum', () => {
      expect(funciones.revenum(pokefinum)).toEqual([251, 150, 1]); // expect lo que recibe y tobe es lo que se espera
    });
  });
  describe('filtrar', () => {
    it('se espera una funcion de filtrado', () => {
      expect(typeof funciones.filter).toBe('function');
    });

    it('filtrar por tipo condicion', () => {    //que solo filtre esa linea .only
        expect(funciones.filter(pokefi)).toEqual([]);
    });
  });

});


import funciones from '../src/data.js';


const pokefi = [{ name: "celeri", type: "water" }, { name: "asa", type: "water" }, { name: "pikachu", type: "poison" } ];
//const ordennume = [{ name: "celeri", type: "water", num: "01"}, { name: "asa", type: "water", num: "011" }, { name: "pikachu", type: "poison", num: "0111" } ];


describe('objeto', () => {
  it('es un objeto', () => {
    expect(typeof funciones).toBe('object');
  });
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
      expect(funciones.ordenarZA(pokefi)).toEqual([{ name: "pikachu", type: "poison" } , { name: "celeri", type: "water" },{ name: "asa", type: "water" } ]); // expect lo que recibe y tobe es lo que se espera
    });

  });

  describe('del 1 al 251', () => {    //describe la funcion
    it('se espera una funcion', () => {    // it lo que se espera como comentario 
      expect(typeof funciones.ordenarnum).toBe('function');
    });
    });

     
     
  describe('del 251 al 1', () => {    //describe la funcion
    it('se espera una funcion', () => {    // it lo que se espera como comentario 
      expect(typeof funciones.revenum).toBe('function');

    });
    
    /*it('ordenar de num 1 a 251', () => {
        expect(funciones.ordenarnum(ordennume)).toEqual([{ name: "asa", type: "water", num: "01"}, { name: "asa", type: "water", num: "011" } ]); // expect lo que recibe y tobe es lo que se espera
      });

      /*it('ordenar de num 251 a 251', () => {
        expect(funciones.ordenarnum(pokefi)).toEqual([{ name: "celeri", type: "water" }, { name: "asa", type: "water" }, { name: "pikachu", type: "poison" } ]); // expect lo que recibe y tobe es lo que se espera
      });*/
        
    }); 

  describe('filtrar', () => {
    it('se espera una funcion de filtrado', () => {
      expect(typeof funciones.filter).toBe('function');
    });

    it('filtrar por tipo condicion', () => {    //que solo filtre esa linea .only
        expect(funciones.filter(pokefi)).toEqual([]);
    });
  });

  describe('filtrarhuevos', () => {
    it('se espera una funcion de filtrado huevos', () => {
      expect(typeof funciones.filterEgg).toBe('function');
    });
  });



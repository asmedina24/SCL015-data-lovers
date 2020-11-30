import funciones from '../src/data.js';


const pokefi = [{ name: "celeri", type: "water" }, { name: "asa", type: "water" }, { name: "pikachu", type: "poison" } ];
const num = [{ "num": "80"}, { "num": "82"}, { "num": "86"}];
//const num2 = [{ "num": "86"}, { "num": "82"}, { "num": "80"}];
const egg = [{name: "tobby", egg: "2 km"}, {name: "luna", egg: "5 km"}];



describe('objeto', () =>{
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
      expect(funciones.ordenarZA(pokefi)).toEqual([{ name: "pikachu", type: "poison" } , { name: "celeri", type: "water" },{ name: "asa", type: "water" }]); // expect lo que recibe y tobe es lo que se espera
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
    
    it('ordenar de num 251 a 1', () => {
        expect(funciones.revenum(num)).toEqual([{ "num": "86"}, { "num": "82"}, { "num": "80"}]); // expect lo que recibe y tobe es lo que se espera
      });

      it('ordenar de num 1 a 251', () => {
        expect(funciones.ordenarnum(num)).toEqual([{ "num": "80"}, { "num": "82"}, { "num": "86"}]); // expect lo que recibe y tobe es lo que se espera
      });
        
    }); 

  describe('filtrar', () => {
    it('se espera una funcion de filtrado', () => {
      expect(typeof funciones.filter).toBe('function');
    });

    it('filtrar por tipo condicion', () => {    //que solo filtre esa linea .only
        expect(funciones.filter(pokefi, "water")).toEqual([{ name: "celeri", type: "water" }, { name: "asa", type: "water" }]);
    });
  });

  describe('filtrarhuevos', () => {
    it('se espera una funcion de filtrado huevos', () => {
      expect(typeof funciones.filterEgg).toBe('function');
    });

    it('funcion de filtrado por huevos 2 km y debe retornar tobby', () => {
      expect(funciones.filterEgg(egg, "2 km")).toEqual([{name: "tobby", egg: "2 km"}]);
    });
    });
  

  

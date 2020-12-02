const funciones = {

    
    ordenarAZ: (pokemon) => {
        const test = pokemon.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            // if (a.name < b.name) {
            return -1
            //}

        });
        return test;
    },

    ordenarZA: (pokemon) => {
        //let pokemon = data.pokemon;
        const result = pokemon.sort(function (a, b) {
            if (a.name < b.name) {
                return 1
            }
            // if (a.name > b.name) {
            return - 1
            //}
        });
        //console.log(result)
        return result;
    },

    ordenarnum: (pokemon) => {
        const result2 = pokemon.sort(function (a, b) {
            if (a.num > b.num) {

                return 1;
            }
            return -1
        })
        return result2;

    },

    revenum: (pokemon) => {
        const result23 = pokemon.sort(function (a, b) {
            if (b.num > a.num) {
                return 1
            }
            return -1
        })

        return result23;
    },

    filter: (pokemon, condition) => { // condicion sale de main js. 
        //console.log(pokemon)
        //console.log(condition)
        const result = pokemon.filter(pokemon => pokemon.type.includes(condition));
        return result;
    },

    filterEgg: (pokemon, condition) => {
        const huevos = pokemon.filter(pokemon => pokemon.egg.includes(condition));
        return huevos;

    },
    search: (pokemon, text) => {
        const search = pokemon.filter(pokemon => pokemon.name.includes(text));
        return search
    },

    // Funcion calcular %
    calculator: (pokemon, typePokemon) => {
      
        let porcenType = []; // crea array vacio
        for (let i = 0; i < pokemon.length; i++) { // recorre la data 
            if (pokemon[i].type.includes(typePokemon)) { // recorre la data q  incluye las coincidencias
                porcenType.push(pokemon[i].type); // push subir y cambiar el porcentype
                
            }
           
        }

        return ((porcenType.length) / 251 * 100).toFixed(0) + `%`; // scar fixed es redonderar 1 es un solo decimal
    },


    

}
export default funciones;










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
                //return 1;
            }
           // if (a.name > b.name) {
             return -1
             //}
        });
        //console.log(result)
        return result;
    },

    filter: (pokemon, condition ) => { // condicion sale de main js. 
       //console.log(pokemon)
       //console.log(condition)
       const result = pokemon.filter( pokemon => pokemon.type.includes(condition));
       return result;
    },
    
    }
    export default funciones;  


  







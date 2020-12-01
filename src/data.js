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
               return 1;
            }
           // if (a.name > b.name) {
             return -1
             //}
        });
        //console.log(result)
        return result;
    },

    ordenarnum: (pokemon) => {
      const result2 =  pokemon.sort(function (a, b) {
          if (a.num > b.num) {
            
            return 1;
          }
          return -1
        })
        return result2;
    
    },

    revenum: (pokemon) => {
       const result23= pokemon.sort(function(a, b) {
           if (b.num - a.num) {
               return -1
           }
        })
        
       return result23;
    },

    filter: (pokemon, condition ) => { // condicion sale de main js. 
       //console.log(pokemon)
       //console.log(condition)
       const result = pokemon.filter( pokemon => pokemon.type.includes(condition));
       return result;
    },


    filterEgg : (pokemon, condition) => {
        const huevos = pokemon.filter ( pokemon => pokemon.egg.includes (condition));
        return huevos;
    }, 
    search: (pokemon, text) => {
        const search=pokemon.filter (pokemon => pokemon.name.includes(text));
        return search
    },
    calcular: (pokemon, type) =>{
        let percentajeType= [];
        for (let i=0;i < pokemon.length; i++){
            if(pokemon[i].type.includes(type)){
                percentajeType.push(pokemon[i].type);
            }
            return((percentajeType.length) / 251 * 100).toFixed(1) + " % "
        }

    },
    }
    export default funciones;  


  







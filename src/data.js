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
        pokemon.sort((a, b)=> a.num - b.num)
    },

    revenum: (pokemon) => {
       pokemon.sort((a, b) => b.num - a.num)
    },

    filtrarAgua: (pokemon) => {
       //const pokemon = data.pokemon;
        //console.log(pokemon)
        const result = pokemon.filter( pokemon => pokemon.type.includes("water") );
        //console.log(2, result,"water");
        //console.log(result);
        return result;
    },

    filtrarInsecto: (pokemon) => {
        const result = pokemon.filter( pokemon => pokemon.type.includes("bug"));
        return result;
    }


}
       
    export default funciones;  


  







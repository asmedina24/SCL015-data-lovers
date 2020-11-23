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

    filtrarAgua: (pokemon) => {
       //const pokemon = data.pokemon;
        //console.log(pokemon)
        const result = pokemon.filter( pokemon => pokemon.type == "water");
        //console.log(2, result,"water");
        //console.log(result);
        return result;
    },

    filtrarInsecto: (pokemon) => {
        const result = pokemon.filter( pokemon => pokemon.type == "electric");
        return result;
    }


}
       
    export default funciones;  


  







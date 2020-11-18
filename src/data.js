/* eslint-disable no-console */
import data  from './data/pokemon.js' // importar la data del data.js

const funciones = {
ordenarAZ: () => {    
let pokemon = data.pokemon; // se exporta 
//let listpokemon = pokemon.name
pokemon.sort(function(a, b) {
    if(a.name > b.name){
        return 1;
    }
    if (a.name < b.name) {
        return -1
    }
    //return 0;
    });
   
},


ordenarZA: () => {
    let pokemon = data.pokemon;
       
    pokemon.reverse()
    console.log(pokemon)

}
 
 

}





export default funciones;

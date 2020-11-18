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
    return 0;
    });
   
},

ordenarZA: () => {
let pokemon = data.pokemon;
pokemon.sort(function(a, b) {
    if(a.name < b.name){
        return 1;
    }
    if (a.name > b.name) {
        return -1
    }
    return 0;
    });
},

}
// ,
// pruebaordenar:() => {
//     let pokemon = data.pokemon;
//     let k;
//     for(let i=1;i<pokemon.length;i++){
//         for(let j=0;j<(pokemon.length-i);j++){
//             if(pokemon[j].name<pokemon[j+1].name){
//                 k=pokemon[j+1];
//                 pokemon[j+1]=pokemon[j];
//                 pokemon[j]=k;
//             }
//         }
//     }
//     return pokemon;

    // const newObj = {};
    // Object.keys(pokemon).forEach((x => {
    //     console.log([pokemon[x].name])
    //     newObj[pokemon[x]]=x
    //     }));
    // return newObj;



export default funciones;

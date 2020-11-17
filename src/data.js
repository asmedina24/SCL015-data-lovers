import data  from './data/pokemon.js' // importar la data del data.js

const funciones = {
ordenar: () => {    
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
    //console.log (pokemon)
let sortdata = pokemon.sort() 
//console.log (sortdata)
for (let i=0; i<sortdata.length; i++){
// console.log (sortdata[i].name);
}
}
}
export default funciones;
















//console.log (pokemon);
//onsole.log (pokemon[2].name);

// imprime ordenado  a la z
/*pokemon.sort(function(a, b) {
    if(a.name > b.name){
        return 1;
    }

    if (a.name < b.name) {
        return -1
    }

    return 0;
});

console.log(pokemon);*/

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/
/* eslint-disable no-unused-vars */
import data  from './data/pokemon.js'
import funciones from './data.js'

const pokemon = data.pokemon;
//funciones.ordenar(pokemon) 
//console.log(pokemon[i].name); 
const conatiner = document.getElementById("mostrar");
for (let i=0; i<pokemon.length; i++){
conatiner.innerHTML += `<div>
<p>${pokemon[i].name}</p>
</div>`;
}


//funciones.ordenar(pokemon)

let ordenaz = document.getElementById("mostraraz").addEventListener( "click" , function () {
let borrar = "" 
for (let i= 0; i<pokemon.length; i++)
document.getElementById ("mostrar").innerHTML = `<div>
<p>${pokemon[i].name}</p><img src= "${pokemon[i].img}"/>
</div>`;
    
});









/*let orderaz = document.getElementById("clickme");
orderaz.addEventListener ("click", funcion myfuntion() {
    if ("click" === true) {
        //funciones.ordenar(pokemon) 
//console.log(pokemon[i].name); 
       // const conatiner = document.getElementById("mostrar");
        for (let i=0; i<pokemon.length; i++){
        conatiner.innerHTML += `<div>
              <p>${pokemon[i].name}</p>
        </div>`;
} 
}
    else  {  for (let i=0; i<pokemon.length; i++){
        conatiner.innerHTML += `<div>
       <p>${pokemon[i].name}</p>
        </div>`;
        } 
}
});*/



/*pokemon.sort(function(a, b) {
    if(a.name > b.name){
        return 1;
    }

    if (a.name < b.name) {
        return -1
    }

    return 0;
}));



//console.log(sortdata[2].name); 



/*import data  from './data/pokemon.js'
import data1 from '/data.js'

const pokemon = data.pokemon;
let sortdata = pokemon.sort() 
//console.log(pokemon[i].name); 
const conatiner = document.getElementById("mostrar");
for (let i=0; i<sortdata.length; i++){
conatiner.innerHTML += `<div>
<img src= "${pokemon[i].img}"/>
<p>${sortdata[i].name}</p>
</div>`;
}
//console.log(pokemon[i].name); */

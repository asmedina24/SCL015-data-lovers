import data from "./data/pokemon.js"
import funciones from './data.js'

let pokemon=data.pokemon;
let pokelist=document.getElementById("content");
const selectOrden=document.querySelector("#selectMenu");
const optionsOrden=document.querySelector("#opmenu");
const selectTypes=document.querySelector("#selectMenu2");
const optionsTypes=document.querySelector("#opmenu2");
const selectEggs=document.querySelector("#selectMenu3");
const optionsEggs=document.querySelector("#opmenu3");
const loader=document.querySelector(".loader");
const AZ=document.getElementById("AZ")
const ZA=document.getElementById("ZA")


selectOrden.addEventListener("click",()=>{
    optionsOrden.classList.toggle("active");
})
selectTypes.addEventListener("click",()=>{
    optionsTypes.classList.toggle("active");
})
selectEggs.addEventListener("click",()=>{
    optionsEggs.classList.toggle("active");
})
function mostrarlista(){
    pokelist.innerHTML=""
    for(let i=0;i<pokemon.length; ++i){
        pokelist.innerHTML+=(`<div class="pokelist">
        <img class="pokeimg" src="${pokemon[i].img}"/>
        <p class="namepoke">${pokemon[i].name}</p></div>`);
    }
}

AZ.addEventListener("click",(event)=>{
    event.preventDefault();
    funciones.ordenarAZ(pokemon) 
    mostrarlista()
}
)
ZA.addEventListener("click",(event)=>{
    event.preventDefault();
    funciones.ordenarZA(pokemon) 
    mostrarlista()
}
)
mostrarlista()


// funciones.ordenarZA(pokemon);



// ZA.addEventListener("click",(event)=>{
//     event.preventDefault();
//    funciones.ordenarZA(pokemon)
//    mostrarlista()
// }
// )



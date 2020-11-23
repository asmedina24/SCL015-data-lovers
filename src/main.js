import data from "./data/pokemon.js"
import funciones from './data.js'

// window.addEventListener("load",function(){
//     document.getElementById("loader").classList.toggle("loader2")
// })

let pokemon = data.pokemon;
let pokelist = document.getElementById("content");
const selectOrden = document.querySelector("#selectMenu");
const optionsOrden = document.querySelector("#opmenu");
const selectTypes = document.querySelector("#selectMenu2");
const optionsTypes = document.querySelector("#opmenu2");
const selectEggs = document.querySelector("#selectMenu3");
const optionsEggs = document.querySelector("#opmenu3");
// const loader=document.querySelector(".loader");
const AZ = document.getElementById("AZ")
const ZA = document.getElementById("ZA")
const num = document.getElementById("1-251")
const revenum = document.getElementById("251-1")
const planta = document.getElementById("planta")


selectOrden.addEventListener("click", () => {
    optionsOrden.classList.toggle("active");
})
selectTypes.addEventListener("click", () => {
    optionsTypes.classList.toggle("active");
})
selectEggs.addEventListener("click", () => {
    optionsEggs.classList.toggle("active");
})


function mostrarlista() {
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < pokemon.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${pokemon[i].img}"/>
        <p class="namepoke">${pokemon[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);

}
AZ.addEventListener("click", (event) => {
    event.preventDefault()
    funciones.ordenarAZ(pokemon)
    mostrarlista()
}
)
ZA.addEventListener("click", (event) => {
    event.preventDefault();
    funciones.ordenarZA(pokemon)
    mostrarlista()
}
)
num.addEventListener("click", (event) => {
    event.preventDefault();
    location.reload()
}
)
revenum.addEventListener("click", (event) => {
    event.preventDefault();
    pokemon.reverse(pokemon.num)
    mostrarlista()
}
)
mostrarlista()


planta.addEventListener("click", (event) => {
    event.preventDefault();
    funciones.filtrarplanta(pokemon)
    //console.log(3,funciones.filtrarplanta(pokemon));
    pokelist.innerHTML = ""
    for (let i = 0; i < funciones.filtrarplanta(pokemon).length; ++i) {
        //console.log(4,funciones.filtrarplanta(pokemon).length);
        pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${funciones.filtrarplanta(pokemon)[i].img}"/>
        <p class="namepoke">${funciones.filtrarplanta(pokemon)[i].name}</p></div>`);
    }
})

// import data from "./data/pokemon.js"
import funciones from './data.js'

fetch ('https://caroline-jeldres.github.io/SCL015-data-lovers/src/data/pokemon.json')
.then(response => response.json()).then(data => {

let pokemon = data.pokemon;
let pokemontemp = data.pokemon;
let pokelist = document.getElementById("content");
const selectOrden = document.querySelector("#selectMenu");
const optionsOrden = document.querySelector("#opmenu");
const selectTypes = document.querySelector("#selectMenu2");
const optionsTypes = document.querySelector("#opmenu2");
const selectEggs = document.querySelector("#selectMenu3");
const optionsEggs = document.querySelector("#opmenu3");
const AZ = document.getElementById("AZ");
const ZA = document.getElementById("ZA");
const num = document.getElementById("1-251");
const revenum = document.getElementById("251-1");


selectOrden.addEventListener("click", () => {
    optionsOrden.classList.toggle("active");
})
selectTypes.addEventListener("click", () => {
    optionsTypes.classList.toggle("active");
})
selectEggs.addEventListener("click", () => {
    optionsEggs.classList.toggle("active");
})
function prev_next(prev_dev){
    let pre_next=''
   // eslint-disable-next-line no-prototype-builtins
   if (prev_dev.hasOwnProperty("next-evolution")) {
        let evolucion = prev_dev["next-evolution"]
        pre_next+='<div><strong>Evolución:</strong><span>'
        for (let index = 0; index < evolucion.length; index++) {
            pre_next += evolucion[index].name
        }
        pre_next +='</span></div>'
    }
    
    // eslint-disable-next-line no-prototype-builtins
    if (prev_dev.hasOwnProperty("prev-evolution")){
        let evolucion = prev_dev["prev-evolution"]
        pre_next+='<div class=modaldatos><strong>Pre-evolución:</strong><span>'
        for (let index = 0; index < evolucion.length; index++) {
            pre_next += evolucion[index].name
        }
        pre_next +='</span></div>'
    }
    return pre_next
}

function mostrarlista() {
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < pokemontemp.length; ++i) {
            pokelist.innerHTML += (`<div id="${pokemontemp[i].num}"class="pokelist">
            <img class="pokeimg" src="${pokemontemp[i].img}"/>
            <p class="namepoke">${pokemontemp[i].name}</p></div>
            <div id="modal_${pokemontemp[i].num}" style="display:none;" class="modal">
                <div class="contenedor_modal">
                    <div class="header_modal">
                    <button type="button" class="close">X</button>
                    </div>
                    <div class="cuerpo_modal">
                        <div class="modalimg"><img src="${pokemontemp[i].img}"/></div>
                        <div class= "letrasdentromodal"><strong>Nombre:</strong><span>${pokemontemp[i].name}</span></div>
                        <div class= "letrasdentromodal"><strong>Numero:</strong><span>${pokemontemp[i].num}</span></div>
                        <div class= "letrasdentromodal"><strong>Generacion:</strong><span>${pokemontemp[i].generation.name}</span></div>
                        <div class= "letrasdentromodal"><strong></strong><span>${pokemontemp[i].about}</span></div>
                        <div class= "letrasdentromodal"><strong>Debilidad:</strong><span>${pokemontemp[i].weaknesses}</span></div>
                        ${prev_next(pokemontemp[i].evolution)}
                    </div>
                </div>
            </div>`);
            tiempo *= i
        }
       let elements = document.getElementsByClassName("pokelist");
        for (let i = 0; i < elements.length; i++) {
            let elemento = elements[i]
            elemento.addEventListener('click', function () {
                document.getElementById('modal_' + elemento.id).style.display = "flex";
            },
            false);
        }
        let modales = document.getElementsByClassName("close");
        for (let i = 0; i < modales.length; i++) {
            let elemento = modales[i]
            elemento.addEventListener('click', function () {
                elemento.closest('.modal').style.display = "none";
            },
            false);
        }
        
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
}

// Funfiones AZ, ZA, 1 a 251, 251 a 1

AZ.addEventListener("click", (event) => {
    event.preventDefault()
    funciones.ordenarAZ(pokemontemp)
    document.getElementById("opmenu").classList.remove("active")
    mostrarlista()
}
)
ZA.addEventListener("click", (event) => {
    event.preventDefault();
    funciones.ordenarZA(pokemontemp)
    document.getElementById("opmenu").classList.remove("active")
    mostrarlista()
}
)
num.addEventListener("click", (event) => {
    event.preventDefault();
    funciones.ordenarnum(pokemontemp)
    document.getElementById("opmenu").classList.remove("active")
    mostrarlista()
}
)
revenum.addEventListener("click", (event) => {
    event.preventDefault();
    funciones.revenum(pokemontemp)
    document.getElementById("opmenu").classList.remove("active")
    mostrarlista()
}
)
    mostrarlista()

// Filtros por tipo 
let tipo_pokemon = document.getElementsByClassName("options");
    for (let i = 0; i < tipo_pokemon.length; i++) {
        let elemento = tipo_pokemon[i] // crea variable que sea por tipo posicion
        elemento.addEventListener('click', function (event) {
            event.preventDefault(); //  previene que se ejecute lo q viene por defecto (href)
            let condition = elemento.id;   // toma id  que viene con esas clases
            pokemontemp = funciones.filter(pokemon, condition)
            document.getElementById("opmenu2").classList.remove("active")
            mostrarlista()
        },
        false);
    }

let tipo_Huevos = document.getElementsByClassName("optionsEgg");
for (let i= 0; i < tipo_Huevos.length; i++) {
   let element = tipo_Huevos[i];
   element.addEventListener ("click", function (event) {
       event.preventDefault();
       let conditionHuevo = element.id;
       pokemontemp = funciones.filterEgg(pokemon, conditionHuevo)
       document.getElementById("opmenu3").classList.remove("active")
       mostrarlista()
   })
}
let search=document.getElementById("search1");
search.addEventListener("keyup",(text)=>{
 let searchPokemon=text.target.value.toLowerCase()   
 pokemontemp=funciones.search(pokemon, searchPokemon)
 mostrarlista()
})
})
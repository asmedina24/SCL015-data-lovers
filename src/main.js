// import data from "./data/pokemon.js"
import funciones from './data.js'

function getdata() {
    fetch('https://caroline-jeldres.github.io/SCL015-data-lovers/src/data/pokemon.json')
        .then(response => response.json()) //responde json
        .then(data => { //se ejecute la funcion q estan dentro
            mostrarTodadata(data)

        })
        .catch(error => error) //capturador de errores
}

window.onload = getdata()

function mostrarTodadata(data) {
    let pokemon = data.pokemon;
    let pokemontemp = data.pokemon;
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
    let porcenType = document.getElementById("porcentaje");

    funciones.mostrarlista(pokemontemp)

    selectOrden.addEventListener("click", () => {
        optionsOrden.classList.toggle("active");
    })
    selectTypes.addEventListener("click", () => {
        optionsTypes.classList.toggle("active");
    })
    selectEggs.addEventListener("click", () => {
        optionsEggs.classList.toggle("active");
    })

    // Funfiones AZ, ZA, 1 a 251, 251 a 1

    AZ.addEventListener("click", (event) => {
        event.preventDefault()
        funciones.ordenarAZ(pokemontemp)
        optionsOrden.classList.remove("active")
        funciones.mostrarlista(pokemontemp)
    }
    )
    ZA.addEventListener("click", (event) => {
        event.preventDefault();
        funciones.ordenarZA(pokemontemp)
        optionsOrden.classList.remove("active")
        funciones.mostrarlista(pokemontemp)
    }
    )
    num.addEventListener("click", (event) => {
        event.preventDefault();
        funciones.ordenarnum(pokemontemp)
        optionsOrden.classList.remove("active")
        funciones.mostrarlista(pokemontemp)
    }
    )
    revenum.addEventListener("click", (event) => {
        event.preventDefault();
        funciones.revenum(pokemontemp)
        optionsOrden.classList.remove("active")
        funciones.mostrarlista(pokemontemp)
    }
    )
    // Filtros por tipo y calculo por tipo

    let tipo_pokemon = document.getElementsByClassName("options");
    for (let i = 0; i < tipo_pokemon.length; i++) {
        let elemento = tipo_pokemon[i] // crea variable que sea por tipo posicion
        elemento.addEventListener('click', function (event) {
            event.preventDefault(); //  previene que se ejecute lo q viene por defecto (href)
            porcenType.innerHTML = "";
            let condition = elemento.id;   // toma id  que viene con esas clases
            pokemontemp = funciones.filter(pokemon, condition)
            let pokemonPorcen = funciones.calculator(pokemon, condition)               ;
            optionsTypes.classList.remove("active")
            porcenType.innerHTML = (`<p class="porcentaje">${condition} = ${pokemonPorcen} de la pokedex</p>`)
            funciones.mostrarlista(pokemontemp)
        },
            false);
    }
    // filtro por huevos

    let tipo_Huevos = document.getElementsByClassName("optionsEgg");
    for (let i = 0; i < tipo_Huevos.length; i++) {
        let element = tipo_Huevos[i];
        element.addEventListener("click", function (event) {
            event.preventDefault();
            let conditionHuevo = element.id;
            pokemontemp = funciones.filterEgg(pokemon, conditionHuevo)
            document.getElementById("opmenu3").classList.remove("active")
            funciones.mostrarlista(pokemontemp)
        })
    }
    // buscador interno
    let search = document.getElementById("search1");
    search.addEventListener("keyup", (text) => {
        let searchPokemon = text.target.value.toLowerCase() // variable igual al palabras igresadas x usuario en miniscula  
        pokemontemp = funciones.search(pokemon, searchPokemon)
        funciones.mostrarlista(pokemontemp)
    })
     
}

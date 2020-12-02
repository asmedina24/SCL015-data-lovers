import funciones from './data.js'
import contenedor from './contenedor.js'

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
    let pokemontemp = pokemon;
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
    const quitar_filtro = document.getElementById("btn_quitar_filtro")
    
    
    contenedor.mostrarlista(pokemontemp)
    

    selectOrden.addEventListener("click", () => {
        optionsOrden.classList.toggle("active");
        optionsEggs.classList.remove("active")
        optionsTypes.classList.remove("active")
    })
    selectTypes.addEventListener("click", () => {
        optionsTypes.classList.toggle("active");
        optionsOrden.classList.remove("active");
        optionsEggs.classList.remove("active")
    })
    selectEggs.addEventListener("click", () => {
        optionsEggs.classList.toggle("active");
        optionsTypes.classList.remove("active");
        optionsOrden.classList.remove("active");
    })
    
    // Funfiones AZ, ZA, 1 a 251, 251 a 1

    AZ.addEventListener("click", (event) => {
        event.preventDefault()
        funciones.ordenarAZ(pokemontemp)
        optionsOrden.classList.remove("active")
        contenedor.mostrarlista(pokemontemp)
    })
    ZA.addEventListener("click", (event) => {
        event.preventDefault();
        funciones.ordenarZA(pokemontemp)
        optionsOrden.classList.remove("active")
        contenedor.mostrarlista(pokemontemp)
     
    })
    num.addEventListener("click", (event) => {
        event.preventDefault();
        funciones.ordenarnum(pokemontemp)
        optionsOrden.classList.remove("active")
        contenedor.mostrarlista(pokemontemp)
   
    })
    revenum.addEventListener("click", (event) => {
        event.preventDefault();
        funciones.revenum(pokemontemp)
        optionsOrden.classList.remove("active")
        contenedor.mostrarlista(pokemontemp)
     
    })
    quitar_filtro.addEventListener("click", (event) => {
        event.preventDefault();
        contenedor.mostrarlista(pokemon)
        porcenType.innerHTML = "";
        pokemontemp = pokemon
    })
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
            porcenType.innerHTML = (`<p class="porcentaje">El tipo ${condition} corresponde a un ${pokemonPorcen} de la pokedex</p>`)
            contenedor.mostrarlista(pokemontemp)
            
        },
            false);
    }
    // filtro por huevos

    let tipo_Huevos = document.getElementsByClassName("optionsEgg");
    for (let i = 0; i < tipo_Huevos.length; i++) {
        let element = tipo_Huevos[i];
        element.addEventListener("click", function (event) {
            porcenType.innerHTML = "";
            event.preventDefault();
            let conditionHuevo = element.id;
            pokemontemp = funciones.filterEgg(pokemon, conditionHuevo)
            optionsEggs.classList.remove("active")
            contenedor.mostrarlista(pokemontemp)
            
        })
    }
    // buscador interno
    let search = document.getElementById("search1");
    search.addEventListener("keyup", (text) => {
        let searchPokemon = text.target.value.toLowerCase() // variable igual al palabras igresadas x usuario en miniscula  
        contenedor.mostrarlista(contenedor.search(pokemontemp, searchPokemon))
        
        
    })
     
}

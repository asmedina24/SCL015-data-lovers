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
const AZ = document.getElementById("AZ");
const ZA = document.getElementById("ZA");
const num = document.getElementById("1-251");
const revenum = document.getElementById("251-1");
const agua = document.getElementById("water");
const insecto = document.getElementById("bug");
const fuego = document.getElementById("fire");
const electrico = document.getElementById("electric");
const hielo = document.getElementById("ice");
const lucha = document.getElementById("fighting");
const veneno = document.getElementById("poison");
const tierra = document.getElementById("ground");
const volador = document.getElementById("flying")
const psiquico = document.getElementById("psychic")
const roca = document.getElementById("rock");
const fantasma = document.getElementById("ghost");
const dragon = document.getElementById("dragon");
const siniestro = document.getElementById("dark");
const acero = document.getElementById("steel");
const hada = document.getElementById("fairy");
const normal = document.getElementById("normal");
const planta = document.getElementById("grass");

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

//console.log(agua.getAttribute("id")) //atributo como string pasalor a data


agua.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (agua.getAttribute("id"));
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);

})
    

fuego.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (fuego.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

insecto.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (insecto.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})


electrico.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (electrico.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

hielo.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (hielo.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

normal.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (normal.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

planta.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (planta.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

lucha.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (lucha.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

veneno.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (veneno.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

tierra.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (tierra.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

volador.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (volador.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})


psiquico.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (psiquico.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

roca.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (roca.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

fantasma.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (fantasma.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

dragon.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (dragon.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

siniestro.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (siniestro.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

acero.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (acero.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})

hada.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (hada.getAttribute("id")); // sacar atributo que hay en id y guardar en variable
    //console.log(condition)
    let result = funciones.filter(pokemon, condition) 
    document.getElementById("opmenu").classList.remove("active")
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = ""
        for (let i = 0; i < result.length; ++i) {
            pokelist.innerHTML += (`<div class="pokelist">
        <img class="pokeimg" src="${result[i].img}"/>
        <p class="namepoke">${result[i].name}</p></div>`);
            tiempo *= i
        }
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);
   
})
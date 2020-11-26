import data from "./data/pokemon.js"
import funciones from './data.js'

let pokemon = data.pokemon;
let pokelist = document.getElementById("content");
// let modal=document.getElementById("modal")
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
            pokelist.innerHTML += (`<div id="${pokemon[i].num}"class="pokelist">
            <img class="pokeimg" src="${pokemon[i].img}"/>
            <p class="namepoke">${pokemon[i].name}</p></div>
            <div id="modal_${pokemon[i].num}" style="display:none;" class="modal">
                <div class="contenedor_modal">
                    <div class="header_modal">
                        <button type="button" class="close">X</button>
                    </div>
                    <div class="cuerpo_modal">
                        <div><img class="pokeimg" src="${pokemon[i].img}"/></div>
                        <div><strong>Nombre:</strong><span>${pokemon[i].name}</span></div>
                        <div><strong>Numero:</strong><span>${pokemon[i].num}</span></div>
                    </div>
                </div>
            </div>`);
            tiempo *= i
            pokelist.addEventListener ("click" , function() {
                pokemodal(pokemon[i]);
                cambioCondenidoModal.style.display= "block";
            })
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
        for (let x = 0; x < modales.length; x++) {
            let elemento = modales[x]
            elemento.addEventListener('click', function () {
                elemento.closest('.modal').style.display = "none";
            },
            false);
        }
        // for (let i = 0; i < elements.length; i++) {
        //     let elemento = elements[i]
        // elemento.addEventListener("click", function () {
        //     pokelist.innerHTML = ""
        //     pokelist += (`<div id="${pokemon[i].num}"class="pokelist"><img class="pokeimg" src="img/pokebolagira.gif"/> </div>`);
        //     console.log("hola")
        //     // document.getElementByClassName('pokeballGira').style.display = "block";
        //     // document.getElementByClassName('pokeimg').style.display = "none";
        //     // document.getElementByClassName('namepoke').style.display = "none";
        // }
        // );
        // }
       
    }, tiempo);
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 1000);

   

}
// document.addEventListener('click', function () {
//     var elements = document.getElementsByClassName("pokelist");
//     for (var i = 0; i < elements.length; i++) {
//         document.getElementById('modal_' + elements[i].id).style.display = "none";
//     }
// });

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
    funciones.ordenarnum(pokemon)
    mostrarlista()
}
)
revenum.addEventListener("click", (event) => {
    event.preventDefault();
    funciones.revenum(pokemon)
    mostrarlista()
}
)
mostrarlista()

agua.addEventListener("click", (event) => {
    event.preventDefault();
    let condition = (agua.getAttribute("id"));
    let result = funciones.filter(pokemon, condition)
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
    document.getElementById("opmenu2").classList.remove("active")
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
<<<<<<< HEAD
   
})

=======

})



    //Añades un evento a cada elemento


>>>>>>> bcaff650b1a4381a885e717a7ab687fd9a5145d4

const cont = {
prev_next :(prev_dev) => {
    let pre_next = ''
    // eslint-disable-next-line no-prototype-builtins
    if (prev_dev.hasOwnProperty("next-evolution")) {
        let evolucion = prev_dev["next-evolution"]
        pre_next += '<div><strong>Evolución:</strong><span>'
        for (let index = 0; index < evolucion.length; index++) {
            pre_next += evolucion[index].name
        }
        pre_next += '</span></div>'
    }

    // eslint-disable-next-line no-prototype-builtins
    if (prev_dev.hasOwnProperty("prev-evolution")) {
        let evolucion = prev_dev["prev-evolution"]
        pre_next += '<div class=modaldatos><strong>Pre-evolución:</strong><span>'
        for (let index = 0; index < evolucion.length; index++) {
            pre_next += evolucion[index].name
        }
        pre_next += '</span></div>'
    }
    return pre_next
},

mostrarlista:(pokemontemp) => {
let pokelist = document.getElementById("content");
    document.getElementById("loader").style.display = "block";
    let tiempo = 1
    setTimeout(function () {
        pokelist.innerHTML = "";
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
                                ${cont.prev_next(pokemontemp[i].evolution)}
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
}

export default (cont);
let contruccion = false; // viene por defecto el false
const contenedor = {
    prev_next: (prev_dev) => {
        let pre_next = ''
        // eslint-disable-next-line no-prototype-builtins
        if (prev_dev.hasOwnProperty("next-evolution")) { //tiene esta propiedad
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
    mostrarlista: (pokemontemp) => {
        let tiempo = 0
        let pokelist = document.getElementById("content");
        let pokemodal = document.getElementById("content_modal");
        document.getElementById("loader").style.display = "block";
        setTimeout(function () {
            pokelist.innerHTML = "";
            if (contruccion===false){  // cargar todo elmodal, cuando se carga vale true
                pokemodal.innerHTML = "";  //se construye el modal y se oculta, aparece cuando no lo necesite
            } 

            for (let i = 0; i < pokemontemp.length; ++i) {
                pokelist.innerHTML += (`<div id="${pokemontemp[i].num}"class="pokelist">
                <img class="pokeimg" src="${pokemontemp[i].img}"/>
                <p class="namepoke">${pokemontemp[i].name}</p></div>`);
                if (contruccion===false){
                    pokemodal.innerHTML += (`<div id="modal_${pokemontemp[i].num}" style="display:none;" class="modal">
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
                                ${contenedor.prev_next(pokemontemp[i].evolution)}
                            </div>
                        </div>
                    </div>`);
                }
                tiempo *= 1
            }
            document.getElementById("loader").style.display = "none";
            contenedor.modal()
            contruccion=true;
        }, tiempo);

    },
    modal: () => {
        let elements = document.getElementsByClassName("pokelist");
        for (let i = 0; i < elements.length; i++) {
            let elemento = elements[i]
            elemento.addEventListener('click', function () {
                document.getElementById('modal_' + elemento.id).style.display = "flex"; //igual al block
            },false);
        }
        let modales = document.getElementsByClassName("close");
        for (let i = 0; i < modales.length; i++) {
            let elemento = modales[i]
            elemento.addEventListener('click', function () {
                elemento.closest('.modal').style.display = "none";
            },false);
        }
    }
}
export default contenedor
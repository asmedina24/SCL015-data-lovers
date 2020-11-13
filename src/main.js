import data from './data/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//let footer= document.getElementById("footer")
//footer.innerHTML="Todos los derechos reservados para Data lovers < L >"

document.getElementById("Pagtwo").onclick = function (){
    //function pastsecond() {
        document.getElementById("Pagtwo").innerHTML = location.href='index2.html';
    }
// eslint-disable-next-line no-console
console.log(data);

document.getElementById("Pagtwo22").onclick = function retornoindice() {

    document.getElementById("Pagtwo22").innerHTML = location.href='index.html'; 
}


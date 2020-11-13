import data from './data/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
<<<<<<< HEAD
let footer= document.getElementById("footer")
footer.innerHTML=`Todos los derechos reservados para Data lovers < L >`;
document.getElementById("Pagtwo").onclick = function() {
=======
//let footer= document.getElementById("footer")
//footer.innerHTML="Todos los derechos reservados para Data lovers < L >"

document.getElementById("Pagtwo").onclick = function (){
>>>>>>> 2b9b6c44fd1318b98cc08ba60fa02c943bb6aca0
    //function pastsecond() {
        document.getElementById("Pagtwo").innerHTML = location.href='index2.html';
    }
// eslint-disable-next-line no-console
console.log(data);

document.getElementById("Pagtwo22").onclick = function retornoindice() {

    document.getElementById("Pagtwo22").innerHTML = location.href='index.html'; 
}


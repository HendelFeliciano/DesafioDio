let nomeHeroi = prompt("Digite um nome para o heroi : ")
let xpHeroi = parseInt(prompt("Digite a xp do heroi :"))

let categoria;

if(xpHeroi<1000){
    categoria ="Ferro";
} else if(xpHeroi >= 1001 && xpHeroi <=2000){
    categoria ="Bronze"
}else if(xpHeroi >= 2001 && xpHeroi <= 5000){
    categoria ="Prata"
}else if(xpHeroi >= 5001 && xpHeroi <= 7000){
    categoria = "Ouro"
}else if(xpHeroi >= 7001 && xpHeroi <= 8000){
    categoria ="Platina"
}else if(xpHeroi >= 8001 && xpHeroi <= 9000){
    categoria ="Ascendente"
}else if(xpHeroi >= 9001 && xpHeroi <= 10000){
    categoria ="Imortal"
}else {
    categoria ="Radiante"
}
console.log(nomeHeroi + " possui " + xpHeroi + " de XP e pertence à categoria " + categoria);

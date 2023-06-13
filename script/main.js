let freshEl = document.getElementById("refresh");
let randomNumber1 = Math.floor((Math.random() * 6)+1);
let randomNumber2 = Math.floor((Math.random() * 6)+1);
let srcImg = `images/dice${randomNumber1}.png`;
let srcImg2 = `images/dice${randomNumber2}.png`;
document.getElementsByTagName("img")[0].setAttribute("src",srcImg);
document.getElementsByTagName("img")[1].setAttribute("src",srcImg2);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}else if(randomNumber1 < randomNumber2 ){
    document.querySelector("h1").textContent = "Player 2 Wins";
}else{
    document.querySelector("h1").textContent = "Draw";
};
let fresh = function(){
    location.reload();
}
freshEl.addEventListener("click",fresh)
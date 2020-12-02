let paragraphe = document.getElementsByTagName("p");

function chiffreRandom(){

    return Math.floor(Math.random()*100);

}

console.log(chiffreRandom());

for(let i=0;i<paragraphe.length;i++){
    paragraphe[i].innerHTML= chiffreRandom().toString();
}

console.log(paragraphe);
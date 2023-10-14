const btn1=document.getElementById('buton');
let compteur=0;

btn1.addEventListener('click',() =>{
    ++compteur;
    if (5<=compteur){
        btn1.innerText ='Bravo, bel échauffement ! '+ compteur;
        console.log('onClickHandlerForBtn1::click');
    }
    if (10<=compteur){
        btn1.innerText ="Vous êtes passé maître en l'art du clic ! "+compteur;
        console.log('onClickHandlerForBtn1::click');
    }
});
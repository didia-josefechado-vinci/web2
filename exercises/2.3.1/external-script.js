const form=document.querySelector('form');
const taperSouhait=document.querySelector('#taperSouhait');
const recupererSouhait=document.querySelector('#souhait');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display='none';
    recupererSouhait.innerText=`Votre souhait :
     ${taperSouhait.value}`;
});

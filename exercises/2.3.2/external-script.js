const divs=document.querySelectorAll(".color-div");

divs.forEach((div)=> {
    div.addEventListener("click",() => {
        div.style.transform = "scale(1.1)";
        div.innerText = `${div.style.backgroundColor}`;
    });
});
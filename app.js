const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

console.log(liEls);

menuEl.addEventListener("click", ()=>{
    socialListEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

liEls.forEach(liEls=>{
    liEls.addEventListener("click", ()=>{
        menuTextEl.innerHTML = liEls.innerHTML;
        socialListEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    })
})
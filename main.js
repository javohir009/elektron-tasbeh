const countin =document.querySelector('.countin')
const plus =document.querySelector('.plus')
const clear =document.querySelector('.clear')
let takbirsoni = 0

plus.addEventListener(`click`, ()=> {
    takbirsoni++;
    countin.textContent =  takbirsoni   
})
clear.addEventListener(`click`, () => {
    takbirsoni = 0
    countin.textContent = takbirsoni
})

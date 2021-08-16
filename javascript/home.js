// Várivaveis //
var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .images')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('avancar')
var voltar = document.getElementById('voltar')
var rolar = true
// Lógica //
for(let i=0; i < quant.length; i++){
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)

}
document.getElementById('0').classList.add('imgAtual')
var pos = document.querySelectorAll('.balls div')
for(let i=0; i< pos.length; i++){
    pos[i].addEventListener('click', ()=>{
        atual= pos[i].id
        rolar = false
        slide()
    })
}
voltar.addEventListener('click', ()=>{
    atual--
    rolar = false
    slide()
})
next.addEventListener('click', ()=>{
    atual++
    rolar = false
    slide()
})
function slide(){
    if(atual >= quant.length){
        atual = 0
    }
    else if(atual <0){
        atual= quant.length-1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -1280 * atual +'px'
    document.getElementById(atual).classList.add('imgAtual')
}
setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else{
        rolar = true
    }
},10000)







//SLIDER MOBILE//
var ballsMobile = document.querySelector('.ballsMobile')
var quantMobile= document.querySelectorAll('.slidesMobile .imagesMobile')
var atualMobile= 0
var imagemMobile = document.getElementById('atualMobile')
var nextMobile = document.getElementById('avancarMobile')
var voltarMobile = document.getElementById('voltarMobile')
var rolarMobile= true



document.getElementById('0').classList.add('imgAtualMobile')
var posMobile = document.querySelectorAll('.ballsMobile div')
for (let i=0; i< posMobile.length; i++){
    posMobile[i].addEventListener('click', ()=>{
        atualMobile = posMobile[i].id
        rolarMobile=false
        slideMobile()
    })
}
voltarMobile.addEventListener('click',()=>{
    atualMobile--
    rolarMobile=false
    slideMobile()
})

nextMobile.addEventListener('click',()=>{
    atualMobile++
    rolarMobile=false
    slideMobile()
})

function slideMobile(){
    if(atualMobile >= quantMobile.length){
        atualMobile = 0
    }  
    else if (atualMobile <0){
        atualMobile = quantMobile.length-1
    }
    document.querySelector('.imgAtualMobile').classList.remove('imgAtualMobile')
    imagemMobile.style.marginLeft = -325 * atualMobile +'px'
    document.getElementById(atualMobile).classList.add('imgAtualMobile')
}

setInterval(()=>{
    if(rolarMobile){
        atualMobile++
        slideMobile()
    }
    else{
        rolarMobile=true
    }
},10000)











//ESCONDER MENU//
function toggleMenu(event){
    if(event.type ==='touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active );
    if (active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}


const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function scrollToID(event) {
    event.preventDefault();
    const ID = event.currentTarget.getAttribute('href');
    const target = document.querySelector(ID);
    target.scrollIntoView({ behavior: "smooth" });
    // fecha o menu
    btnMobile.click();
  }
  
  // Seleciona links internos
  const intLinks = document.querySelectorAll('[href^="#"]');
  intLinks.forEach(link => {
    link.addEventListener('click', scrollToID);
  });


function produtos(){
    window.location = "#terceiraParte";
}






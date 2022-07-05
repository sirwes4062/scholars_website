//onclick on navbar-links
var header = document.getElementById("header");
var alberteinstein = document.getElementById("alberteinstein");
var nikolatesla = document.getElementById("nikolatesla");
var isaacnewton = document.getElementById("isaacnewton");
var model = document.getElementById("model");
var specializations = document.getElementById("specializations");
var contributions = document.getElementById("contributions");

alberteinstein.onclick = function(){
  model.innerHTML = "ALBERT EINSTEIN"
  specializations.innerHTML ="mathematics and physics"
  contributions.innerHTML ="theories of relativity(general and special) and the photoelectrical effect"
}

nikolatesla.onclick = function(){
  model.innerHTML = "NIKOLA TESLA"
  specializations.innerHTML = "physics and electrical engineering"
  contributions.innerHTML = "alternating current,electric motors,electric generator and dynamo"
}

isaacnewton.onclick = function(){
  model.innerHTML = "ISAAC NEWTON"
  specializations.innerHTML = "philosophy,mathematics,physics and astronomy"
  contributions.innerHTML = "calculus,classical mechanics and the law of universal gravitation"
}

let albert = document.querySelector('#alberteinstein');
let nikola = document.querySelector('#nikolatesla');
let isaac = document.querySelector('#isaacnewton');

albert.addEventListener('click', ()=>{
    document.body.style.backgroundImage = "url('images/einstein.jpg')";
});


nikola.addEventListener('click', ()=>{
    document.body.style.backgroundImage = "url('images/tesla.jpg')";
});

isaac.addEventListener('click', ()=>{
    document.body.style.backgroundImage = "url('images/newton.jpg')";
});

//toggle button and navigation links
const togglebutton = document.getElementsByClassName("toggle-button")[0]
const navbarlinks = document.getElementsByClassName("nav-links")[0]

togglebutton.addEventListener("click", ()=>{
    navbarlinks.classList.toggle("active")
})
"use strict"

//header
const btn_bar = document.querySelector(".btn_bar");
const nav_ul = document.querySelector(".nav_ul");

btn_bar.addEventListener("click", () => {
    nav_ul.classList.toggle("active");
});

// Cerrar el menú cuando se hace clic en un enlace
const navLinks = nav_ul.querySelectorAll("a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav_ul.classList.toggle("active");
    });
}); 

// Cerrar el menú al hacer clic fuera del área de navegación
document.addEventListener('click', (event) => {
    const navHamburguer = document.querySelector('.nav_hamburguer');
    
    // Si el clic está fuera del menú y del botón hamburguesa
    if (!nav_ul.contains(event.target) && !navHamburguer.contains(event.target)) {
        nav_ul.classList.add('active');
    }
});

//texto aleatorio en el banner
document.getElementById('textoAleatorio').innerText = texto_aleatorio();

function texto_aleatorio () {
    const textos = [];

    textos[0] = "Refuerza su conocimiento"
    textos[1] = "Ofrecele un mejor futuro"
    textos[2] = "Brindale un cambio"

    let aleat = Math.random() * (textos.length)
    aleat = Math.floor(aleat)
    
    return textos[aleat];
}
function iniciarCambioDinamico() {
    const elementoTexto = document.getElementById('textoAleatorio');

    // Cambiar texto cada 3 segundos
    setInterval(() => {
        elementoTexto.innerText = texto_aleatorio();
    }, 3000);
}

// Iniciar el cambio dinámico al cargar la página
iniciarCambioDinamico();

//imagen de contacto whatsapp 

const WhatsappS = document.querySelectorAll(".contact")
const phoneNumber = 50558444805;

WhatsappS.forEach(Whatsapp => {
Whatsapp.addEventListener("click",()=>{
    const whatsappURL = `https://wa.me/${phoneNumber}?text=¡Hola!%20Me%20podría%20brindar%20más%20información.`;

    window.open(whatsappURL)
})})



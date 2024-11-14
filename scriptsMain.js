let imagenes = [
    { url: "f01.webp", nombre: "Pshyospa", descripcion: "Un espacio dedicado a tu salud y bienestar, donde combinamos terapias físicas y relajación para mejorar tu calidad de vida." },
    { url: "f02.webp", nombre: "Masajes Relajantes", descripcion: "Alivia el estrés y relájate con masajes personalizados." },
    { url: "f03.webp", nombre: "Fisioterapia y Rehabilitación", descripcion: "Recupera movilidad y fuerza con nuestras sesiones terapéuticas." },
    { url: "f04.webp", nombre: "Masaje de Tejido Profundo", descripcion: "Alivia tensiones y dolores musculares crónicos." },
    { url: "f06.webp", nombre: "Aromaterapia", descripcion: "Relájate con aceites esenciales que mejoran el estado de ánimo." },
    { url: "f05.webp", nombre: "Terapia con Calor", descripcion: "Mejora la circulación y alivia el dolor muscular." },
    { url: "f07.webp", nombre: "Masaje Deportivo", descripcion: "Ideal para atletas, ayuda a la recuperación muscular." },
    { url: "f08.webp", nombre: "Bienestar Integral", descripcion: "Relájate y revitalízate con tratamientos completos de bienestar." }
];

let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("imagen");
let puntos = document.getElementById("puntos");
let texto = document.getElementById("texto");
let actual = 0;
positionCarrousel();

atras.addEventListener("click", function() {
    actual = (actual - 1 + imagenes.length) % imagenes.length;
    actualizarImagen();
    positionCarrousel();
});

adelante.addEventListener("click", function() {
    actual = (actual + 1) % imagenes.length;
    actualizarImagen();
    positionCarrousel();
});

function actualizarImagen() {
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="imagen de pagina" loading="lazy">`;
    texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3><p>${imagenes[actual].descripcion}</p>`;
}

function positionCarrousel() {
    puntos.innerHTML = "";
    for (let i = 0; i < imagenes.length; i++) {
        puntos.innerHTML += `<p class="${i === actual ? "bold" : ""}">.</p>`;
    }
}

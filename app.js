const lumi = {
    nombre: `Lumi`,
    felicidad: 8,
    salud: 10,
    limpieza: 10,
    energia: 8,
    personalidad: `Lumi es una nube de polvo estelar. Le encanta absorber luz de estrellas, flotar en el vacío y las
                    duchas cósmicas refrescantes`,
};

const UI = {
    FELICIDAD: document.getElementById(`felicidad`),
    SALUD: document.getElementById(`salud`),
    LIMPIEZA: document.getElementById(`limpieza`),
    ENERGIA: document.getElementById(`energia`),
    PERSONALIDAD: document.getElementById(`personalidad`),
};

const IMAGEN = document.getElementById(`imagen`);
const ICONO = `⭐`;

function actualizarInterfaz() {
    UI.FELICIDAD.innerText = ICONO.repeat(
        Math.max(0, Math.min(10, lumi.felicidad)),
    );
    UI.SALUD.innerText = ICONO.repeat(Math.max(0, Math.min(10, lumi.salud)));
    UI.LIMPIEZA.innerText = ICONO.repeat(
        Math.max(0, Math.min(10, lumi.limpieza)),
    );
    UI.ENERGIA.innerText = ICONO.repeat(
        Math.max(0, Math.min(10, lumi.energia)),
    );
    UI.PERSONALIDAD.innerText = lumi.personalidad;
}

function duchar() {
    lumi.limpieza = 10;
    lumi.felicidad = Math.min(10, lumi.felicidad + 1);
    IMAGEN.src = "./img/ducha.png";
    actualizarInterfaz();
}

function alimentar() {
    lumi.felicidad = Math.min(10, lumi.felicidad + 2);
    lumi.salud = Math.min(10, lumi.salud + 1);
    lumi.energia = Math.min(10, lumi.energia + 1);
    IMAGEN.src = "./img/comida.png";
    actualizarInterfaz();
}

function jugar() {
    lumi.felicidad = Math.min(10, lumi.felicidad + 3);
    lumi.energia = Math.max(0, lumi.energia - 2);
    lumi.limpieza = Math.max(0, lumi.limpieza - 1);
    IMAGEN.src = "./img/juegoss.png";
    actualizarInterfaz();
}

function dormir() {
    lumi.energia = 10;
    lumi.felicidad = Math.min(10, lumi.felicidad + 1);
    IMAGEN.src = "./img/sueño.png";
    actualizarInterfaz();
}

function reprender() {
    lumi.felicidad = Math.max(0, lumi.felicidad - 4);
    lumi.salud = Math.max(0, lumi.salud - 1);
    IMAGEN.src = "./img/regaño.png";
    actualizarInterfaz();
}

function acariciar() {
    lumi.felicidad = Math.min(10, lumi.felicidad + 2);
    IMAGEN.src = "./img/caricia.png";
    actualizarInterfaz();
}

// Función para simular HOVER en dispositivos táctiles
function applyTouchHover(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
        el.addEventListener("touchstart", () => el.classList.add(activeClass), {
            passive: true,
        });
        el.addEventListener(
            "touchend",
            () => el.classList.remove(activeClass),
            { passive: true },
        );
        el.addEventListener(
            "touchcancel",
            () => el.classList.remove(activeClass),
            { passive: true },
        );
    });
}

// Aplicamos los efectos al cargar
window.addEventListener("DOMContentLoaded", () => {
    applyTouchHover(".js-btn", "mobile-active-btn");
    applyTouchHover(".js-img", "mobile-active-img");
    applyTouchHover(".js-row", "mobile-active-row");
});

actualizarInterfaz();

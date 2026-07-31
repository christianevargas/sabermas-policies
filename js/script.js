/* ==========================================================
   PRE SABER MÁS · LANDING
   - Fade in al cargar
   - Flotacion suave de los telefonos
   - Parallax con el mouse
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ---------------------------------------------
    // 1. Fade in del hero
    // ---------------------------------------------
    const hero = document.querySelector(".hero");
    if (hero) {
        requestAnimationFrame(() => hero.classList.add("loaded"));
    }

    // ---------------------------------------------
    // 2. Configuracion de los telefonos
    // ---------------------------------------------
    const phones = document.querySelectorAll(".phone");

    // Posiciones y rotaciones base (centradas en la mitad)
    const basePositions = [
        { x: -170, y: 42, rotate: -14 },  // phone-1 · izquierdo
        { x: 0,    y: -14, rotate: 0 },   // phone-2 · central
        { x: 170,  y: 42, rotate: 14 }    // phone-3 · derecho
    ];

    // Profundidad para el parallax (los laterales se mueven mas)
    const depths = [16, 7, 16];

    let mouseX = 0;
    let mouseY = 0;

    // ---------------------------------------------
    // 3. Seguimiento del mouse
    // ---------------------------------------------
    document.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // ---------------------------------------------
    // 4. Animacion principal (flotacion + parallax)
    // ---------------------------------------------
    function animatePhones() {
        const t = performance.now() * 0.001;

        phones.forEach((phone, i) => {
            const base = basePositions[i];

            // Flotacion suave sinusoidal
            const floatY = Math.sin(t + i * 1.4) * 11;
            const floatX = Math.cos(t + i * 1.4) * 6;

            // Parallax por profundidad
            const parallaxX = mouseX * depths[i];
            const parallaxY = mouseY * depths[i];

            // Rotacion con leve oscilacion
            const rotate = base.rotate + Math.sin(t + i * 1.4) * 1.6;

            phone.style.transform =
                `translate(calc(-50% + ${(base.x + floatX + parallaxX).toFixed(2)}px),
                           calc(-50% + ${(base.y + floatY + parallaxY).toFixed(2)}px))
                 rotate(${rotate.toFixed(2)}deg)`;
        });

        requestAnimationFrame(animatePhones);
    }

    animatePhones();

});

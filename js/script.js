/* ==========================================================
   PRE SABER MÁS · LANDING
   - Fade in al cargar
   - Parallax con el mouse (solo pantallas grandes)
   La posicion de los telefonos y su flotacion son 100% CSS,
   por lo que el JS nunca aplica transformaciones.
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
    // 2. Parallax solo en pantallas grandes.
    //    En movil el layout es flujo normal (CSS puro).
    // ---------------------------------------------
    if (window.matchMedia("(max-width: 720px)").matches) return;

    const phones = document.querySelectorAll(".phone");

    // Profundidad por telefono (los laterales se mueven mas)
    const depths = [14, 6, 14];

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // ---------------------------------------------
    // 3. Parallax suave (solo desplaza con margins)
    // ---------------------------------------------
    function parallax() {
        phones.forEach((phone, i) => {
            phone.style.marginLeft = `${(mouseX * depths[i]).toFixed(1)}px`;
            phone.style.marginTop = `${(mouseY * depths[i]).toFixed(1)}px`;
        });
        requestAnimationFrame(parallax);
    }

    parallax();

});

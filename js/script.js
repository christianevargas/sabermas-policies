/* =====================================
   PRE SABER MÁS LANDING
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Fade al cargar
    document.body.classList.add("loaded");

    const phones = document.querySelectorAll(".phone");

    // Posiciones originales
    const basePositions = [
        { x: -120, y: 20, rotate: -13 },
        { x: 0, y: 0, rotate: 0 },
        { x: 120, y: 20, rotate: 13 }
    ];

    // Animación de flotación
    function animatePhones() {

        const t = Date.now() * 0.001;

        phones.forEach((phone, i) => {

            const floatY = Math.sin(t + i) * 10;
            const rotate = basePositions[i].rotate + Math.sin(t + i) * 2;

            phone.style.transform =
                `translate(${basePositions[i].x}px, ${basePositions[i].y + floatY}px)
                 rotate(${rotate}deg)`;

        });

        requestAnimationFrame(animatePhones);
    }

    animatePhones();

    // Parallax con el mouse
    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        phones.forEach((phone, i) => {

            const depth = (i + 1) * 4;

            phone.style.marginLeft = `${x / depth}px`;
            phone.style.marginTop = `${y / depth}px`;

        });

    });

});

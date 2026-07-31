document.addEventListener("DOMContentLoaded", () => {

    const phones = document.querySelectorAll(".phone");

    // Animación flotante
    function floatPhones() {

        const t = Date.now() * 0.001;

        phones.forEach((phone, index) => {

            const offset = Math.sin(t + index) * 10;

            let rotation = 0;

            if (phone.classList.contains("left-phone"))
                rotation = -13;

            if (phone.classList.contains("right-phone"))
                rotation = 13;

            phone.style.transform =
                `translateY(${offset}px) rotate(${rotation}deg)`;

        });

        requestAnimationFrame(floatPhones);

    }

    floatPhones();

    // Parallax suave
    document.addEventListener("mousemove", e => {

        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;

        phones.forEach((phone, i) => {

            const factor = (i + 1) * 0.6;

            phone.style.marginLeft = `${x * factor}px`;
            phone.style.marginTop = `${y * factor}px`;

        });

    });

});

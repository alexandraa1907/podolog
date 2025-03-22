// плавное появление элеметов
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".main > *"); // Берём все элементы внутри <main>
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((el) => {
        el.classList.add("hidden"); // Изначально скрываем элементы
        observer.observe(el);
    });
    
    let button = document.querySelector(".menu-but");
    const forma = document.querySelector(".forma-map");
    button.addEventListener("click", ()=>{ 
        forma.scrollIntoView({ behavior: 'smooth' }); // Плавний скрол
    });
    console.log(button);

    
});

// 


    // const text = "ЗДОРОВЫЕ СТОПЫ - УВЕРЕННОСТЬ В КАЖДОМ ШАГЕ!";
    // const container = document.getElementById("flipText");

    // text.split("").forEach((char, i) => {
    //     let span;
    //     if (char === " ") {
    //         // Если пробел, создаём отдельный span с классом "space"
    //         span = document.createElement("span");
    //         span.classList.add("space");
    //     } else {
    //         // Если не пробел, создаём обычный span с буквой
    //         span = document.createElement("span");
    //         span.textContent = char;
    //     }
    //     span.style.animationDelay = `${i * 0.2}s`; // Задержка между буквами
    //     container.appendChild(span);
    // });

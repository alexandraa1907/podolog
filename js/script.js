document.addEventListener('DOMContentLoaded', function () {
    let button = document.querySelector(".menu-but");
    let popup = document.querySelector(".popup");
    let crossRight = document.querySelector(".cross-right");
    button.addEventListener("click", ()=>{
        popup.classList.add("active");
    });

    crossRight.addEventListener("click", ()=>{
        popup.classList.remove("active");
    });
    console.log(button);

  });

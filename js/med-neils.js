function andswerDrop() {
  const dropContainers = document.querySelectorAll(".answer-pict");

  dropContainers.forEach((item) => {
    let button = item.querySelector("button");
    button.addEventListener("click", () => {
      if (item.classList.contains("show")) {
        item.classList.remove("show");
      } else {
        item.classList.add("show");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  andswerDrop();
});

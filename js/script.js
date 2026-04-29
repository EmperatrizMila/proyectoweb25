document.addEventListener("DOMContentLoaded", () =>  {
    console.log("Sitio cargando correctamente");

    //BOTON HACIA ARRIBA
    const btnTop = document.getElementById("btnTop");
    if (btnTop){
        window.addEventListener("scroll", () => {
            btnTop.style.display = window.scrollY >200 ? "block" : "none";
        });

        btnTop.addEventListener("click" , () => {
            window.scrollTo({ top: 0, behavior: "smooth"});
        });
    };

});

// BOTÓN LIKE
const btnLike = document.createElement("button");
btnLike.classList.add("btn-like");

// obtener likes guardados
let likes = localStorage.getItem("likes") || 0;

btnLike.innerHTML = `❤️ ${likes}`;
document.body.appendChild(btnLike);

btnLike.addEventListener("click", () => {
    likes++;
    localStorage.setItem("likes", likes);
    btnLike.innerHTML = `❤️ ${likes}`;
});
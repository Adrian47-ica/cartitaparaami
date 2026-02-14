const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    // 1. Si toca el corazón o el sobre cerrado, se abre
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        
        envoltura.classList.toggle("abierto");
        
        // Si se abre, esperamos a que termine la animación del sobre para subir la carta
        if (envoltura.classList.contains("abierto")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");
                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);
                envoltura.classList.add("desactivar-sobre");
            }, 1000);
        }
    } 
    // 2. Si la carta ya está abierta y toca FUERA de la carta, se cierra
    else if (envoltura.classList.contains("abierto") && !e.target.closest(".carta")) {
        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre");
        
        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");
            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta");
            }, 500);
        }
    }
});
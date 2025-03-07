// Detecta el interruptor en el DOM
const darkModeSwitch = document.getElementById("darkModeSwitch");

// Función para activar/desactivar el modo oscuro
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");

    // Guarda la preferencia en localStorage
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
};

// Evento para cambiar el tema cuando el usuario haga clic
darkModeSwitch.addEventListener("change", toggleDarkMode);

// Mantener la preferencia del usuario al recargar la página
document.addEventListener("DOMContentLoaded", () => {
    // Verifica la preferencia guardada en localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        darkModeSwitch.checked = true; // Mantener el switch activado
    } else {
        // Si no está en modo oscuro, asegurarse de que el switch esté apagado
        darkModeSwitch.checked = false;
    }
});

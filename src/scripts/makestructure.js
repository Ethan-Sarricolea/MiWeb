document.addEventListener("DOMContentLoaded", function () {
    // Obtener la "profundidad" y ruta base de la pagina actual
    let depth = window.location.pathname.split("/").length - 2;
    
    // Ajustar la ruta base según el entorno (local o GitHub Pages)
    // let basePath = window.location.hostname === 'localhost' ? "src/includes/" : "/src/includes/";
    let isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    let repoName = "/MiWeb"; // Cambia esto por el nombre de tu repositorio en GitHub Pages si es necesario
    let basePath = isLocal ? "src/includes/" : repoName + "/src/includes/";
    console.log(basePath);

    // Encontrar los div header y footer
    let headerEl = document.getElementById("header");
    let footerEl = document.getElementById("footer");

    // Si se encuentra el header mostrarlo
    if (headerEl) {
        fetch(basePath + "header.html")
            .then(response => response.text())
            .then(data => {
                headerEl.innerHTML = data;

                // 🔹 Asignar el evento para el botón de modo oscuro
                const darkModeButton = document.getElementById("darkModeSwitch");
                if (darkModeButton) {
                    darkModeButton.addEventListener("click", function () {
                        document.body.classList.toggle("dark-mode");
                    });
                }

                // Ajustar rutas de los enlaces del nav
                document.querySelectorAll("#header .nav-link").forEach(link => {
                    // Obtener los href del nav
                    let originalHref = link.getAttribute("href");
                    console.log(originalHref)
                    // Modificar segun las diferencias
                    if (originalHref && !originalHref.startsWith("http")) {
                        let newHref = "../".repeat(depth) + repoName + "/" + originalHref;
                        console.log(newHref)
                        link.setAttribute("href", newHref);
                    }
                });
            })
            .catch(error => console.error("Error cargando el header:", error));
    }

    // Si se encuentra el footer, mostrarlo
    if (footerEl) {
        fetch(basePath + "footer.html")
            .then(response => response.text())
            .then(data => {
                footerEl.innerHTML = data;
            })
            .catch(error => console.error("Error cargando el footer:", error));
    }
});


// document.addEventListener("DOMContentLoaded", function () {
//     // Obtener la "profundidad" y ruta base de la pagina actual
//     let depth = window.location.pathname.split("/").length - 2;
//     let basePath = depth > 0 ? "../".repeat(depth) + "src/includes/" : "src/includes/";

//     // Encontrar los div header y footer
//     let headerEl = document.getElementById("header");
//     let footerEl = document.getElementById("footer");

//     // Si se encuentra el header mostrarlo
//     if (headerEl) {
//         fetch(basePath + "header.html")
//             .then(response => response.text())
//             .then(data => {
//                 headerEl.innerHTML = data;

//                 // 🔹 Asignar el evento para el botón de modo oscuro
//                 const darkModeButton = document.getElementById("darkModeSwitch");
//                 if (darkModeButton) {
//                     darkModeButton.addEventListener("click", function () {
//                         document.body.classList.toggle("dark-mode");
//                     });
//                 }

//                 // Ajustar rutas de los enlaces del nav
//                 document.querySelectorAll("#header .nav-link").forEach(link => {
//                     // Obtener los href del nav
//                     let originalHref = link.getAttribute("href");

//                     // Modificar segun las diferencias
//                     if (originalHref && !originalHref.startsWith("http")) {
//                         let newHref = "../".repeat(depth) + originalHref;
//                         link.setAttribute("href", newHref);
//                     }
//                 });
//             })
//             .catch(error => console.error("Error cargando el header:", error));
//     }

//     // Si se encuentra el footer, mostrarlo
//     if (footerEl) {
//         fetch(basePath + "footer.html")
//             .then(response => response.text())
//             .then(data => {
//                 footerEl.innerHTML = data;
//             })
//             .catch(error => console.error("Error cargando el footer:", error));
//     }
// });


// Fallido


// document.addEventListener("DOMContentLoaded", function () {
//     let depth = window.location.pathname.split("/").length - 2;
//     let basePath = depth > 0 ? "../".repeat(depth) + "src/includes/" : "src/includes/";

//     let headerEl = document.getElementById("header");
//     let footerEl = document.getElementById("footer");

//     if (headerEl) {
//         fetch(basePath + "header.html")
//             .then(response => response.text())
//             .then(data => {
//                 headerEl.innerHTML = data;

//                 // Ajustar las rutas de los enlaces del nav
//                 document.querySelectorAll("#header .nav-link").forEach(link => {
//                     let originalHref = link.getAttribute("href");
//                     if (originalHref && !originalHref.startsWith("http")) {
//                         let newHref = "../".repeat(depth) + originalHref;
//                         link.setAttribute("href", newHref);
//                     }
//                 });

//                 // 🔹 Ajustar la ruta de la hoja de estilo del modo oscuro (ahora en src/styles)
//                 const darkModeCssLink = document.getElementById("darkModeCss");
//                 if (darkModeCssLink) {
//                     darkModeCssLink.href = "../".repeat(depth) + "src/styles/darkmode.css";  // Ajusta la ruta de tu CSS
//                     console.log(darkModeCssLink.href)
//                 }

//                 // Asignar el evento para el botón de modo oscuro
//                 const darkModeButton = document.getElementById("darkModeButton");
//                 if (darkModeButton) {
//                     darkModeButton.addEventListener("click", function () {
//                         document.body.classList.toggle("dark-mode");
//                     });
//                 }
//             })
//             .catch(error => console.error("Error cargando el header:", error));
//     }

//     if (footerEl) {
//         fetch(basePath + "footer.html")
//             .then(response => response.text())
//             .then(data => {
//                 footerEl.innerHTML = data;
//             })
//             .catch(error => console.error("Error cargando el footer:", error));
//     }
// });

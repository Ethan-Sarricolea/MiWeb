# Navegación y footer

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Mi web</title>
        <!-- Importar Bootstrap desde la CDN -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <!-- Css modo oscuro -->
        <link rel="stylesheet" href="src\styles\darkmode.css">
    </head>
    <body>

    <!-- Barra de navegación básica -->
        <!-- [] -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="https://avatars.githubusercontent.com/u/144255690?v=4" alt="Mi Logo" class="d-inline-block align-text-top" style="height: 50px;">
                </a>
                <!-- Modo oscuro -->
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="darkModeSwitch">
                    <label class="form-check-label" for="darkModeSwitch" style="color: white;">Modo Oscuro</label>
                </div>
                
                <!-- Abrir navegacion -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Opciones de navegacion -->
                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="src\pages\proyectos.html">Proyectos</a></li>
                        <li class="nav-item"><a class="nav-link" href="src\pages\conocimientos.html">Conocimientos</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" onclick="alert('En desarrollo')">Portafolio</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <main>  
            <!-- Secciones -->
        </main>

        <!-- Pie de pagina -->
        <footer class="bg-dark container-fluid flex-grow-1">
           <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block"> <!-- izquierda -->
                    <span style="color: white;">Mis redes sociales</span>
                </div>
                <!-- Derecha -->
                <div class="row" style="color: white;">
                    <a href="mailto:esarricolea@gmail.com" target="_blank"  class="me-4 text-reset" style="color: white;">
                        <span class="fab fa-google"></span>
                        <p>Correo de google</p>
                    </a>
                    <a href="https://www.linkedin.com/in/ethan-sarricolea-cortes" target="_blank"class="me-4 text-reset" style="color: white;">
                        <span class="fab fa-linkedin"></span>
                        <p>LinkedIn</p>
                    </a>
                    <a href="https://github.com/Ethan-Sarricolea" target="_blank" class="me-4 text-reset">
                        <span class="fab fa-github"></span>
                        <p>GitHub</p>
                    </a>
                    <a href="https://www.coursera.org/user/1e1b962052cda4a15bc6f83414c9aed4" target="_blank"  class="me-4 text-reset" style="color: white;">
                        <span class="fas fa-graduation-cap"></span>
                        <p>Coursera</p>
                    </a>
                    <a href="https://www.domestika.org/es/spartandmx" target="_blank" class=" me-4 text-reset" style="color: white;">
                        <span class="fa-solid fa-heart"></span>
                        <p>Domestika</p>
                    </a>
                    <a href="https://www.credly.com/users/ethan-sarricolea" target="_blank" class="me-4 text-reset">
                        <span class="fas fa-certificate"></span>
                        <p>Credly</p>
                    </a>
                    <a href="https://omegaup.com/profile/Sarricolea_Ethan/" class="me-4 text-reset" target="_blank">
                        <span style="text-decoration: none; display: inline-block;"><b>&Omega;Up</b></span>
                        <p>OmegaUp</p>
                    </a>
                </div >
                 <!-- Copyright -->
                <div class="text-center p-4 row" style="color: white; ">
                    © 2025 Copyright:
                    Ethan-Sarricolea
                </div>
           </section>

           <!-- links -->
        </footer>
        <!-- Bootstrap JS (necesario para el menú responsive) -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js"></script>
        <!-- Modo oscuro (script) -->
        <script src="src\scripts\darkmode.js"></script>
    </body>
</html>
```

# Mostrar n readme
```html
                <!-- Secciones y contenido -->
                <script>
                    async function loadReadme() {
                        const url = "utl readme"; 
            
                        try {
                            const response = await fetch(url);
                            const content = await response.text();
            
                            // Convertir Markdown a HTML
                            const converter = new showdown.Converter();
                            document.getElementById("readme").innerHTML = converter.makeHtml(content);
                        } catch (error) {
                            console.error("Error cargando el README:", error);
                            document.getElementById("readme").innerText = `Error cargando el README. ${error}`;
                        }
                    }
            
                    window.onload = loadReadme;
                </script>

                <div id="readme" class="container">Cargando...</div>
```

# Boton de acceso

```html
<div class="card text-center shadow" style="max-width: 400px; margin: auto; margin-bottom: 30px">
    <div class="card-body">
            <h5 class="card-title">📌Proyecto en GitHub📌</h5>
            <p class="card-text">Descarga y prueba el codigo aquí</p>
            <a href="https://github.com/Ethan-Sarricolea/Juego-de-Mazmorras/tree/main" target="_blank" class="btn btn-primary">
                <i class="fab fa-github"></i> Ir a GitHub
            </a>
    </div>
</div>`
``
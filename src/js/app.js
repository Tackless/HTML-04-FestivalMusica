document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})
function iniciarApp(){
    navegacionFija();
    crearGaleria();
    scrollNav();
}
function navegacionFija() {
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
const body = document.querySelector('body');

    window.addEventListener('scroll', function() {
        if( sobreFestival.getBoundingClientRect().top < 0 ) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}
function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView( { behavior: "smooth"});
        });
    });
}
function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.webp" alt="Imagen Galería">
        `;
        imagen.onclick = function() {
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.webp" alt="Imagen Galería">
    `;

    // Crear el overlay con la imagen
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    // Boton para cerrar el modal 
    const cerrarModal = document.createElement('p');
    cerrarModal.textContent = ('X');
    cerrarModal.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    cerrarModal.classList.add('btn-cerrar');

    overlay.appendChild(cerrarModal);

    // Añadirlo a HTML
    const body = document.querySelector('body');
    body.appendChild(overlay)
    body.classList.add('fijar-body');
    
}
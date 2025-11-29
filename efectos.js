
//-------------- EFECTO APARECER----------------------//
const aparecer = document.getElementById('aparecer'); // en este caso estamos cargando la ruta de la seccion //
const aparecerproductos = document.getElementById('aparecerproductos');
const aparecerblog = document.getElementById('aparecerblog');
const aparecercontacto = document.getElementById('aparecercontacto')
const cargarseccion = (entradas, observador) => {

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){ 
            entrada.target.classList.add('visible');

        }
        
    });
}



const observador = new IntersectionObserver (cargarseccion, {
    root: null,
    rootmargin: 0,
    threshold: 0.2
});

observador.observe(aparecer);
observador.observe(aparecerproductos);
observador.observe(aparecerblog);
observador.observe(aparecercontacto)

//--------------------FIN EFECTO APARECER ----------------------//



//------------------EFECTO MAQUINA DE ESCRIBIR---------------------//

const typed = new Typed('.typed', {
    strings: [
        'Despierta tu lado más audaz.', 
        'Tradición rusa autentica.', 
        'Una bebida con historia.', 
        'Un sabor para valientes.'
    ],
    
	typeSpeed: 55, // Velocidad en mlisegundos para poner una letra,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '<i class="bi bi-cup-straw"></i>', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});









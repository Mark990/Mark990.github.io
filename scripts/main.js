
// gggggg

/* este es un comentario
 * más largo, de varias líneas
 */

// document.querySelector('img').onclick = function() {
//     alert('¡Hola! Soy Zachito, ¿puedes acariciarme por favor?');
// }

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/zach-00.jpg') {
      miImage.setAttribute('src','images/zach-01.jpg');
    } else {
      miImage.setAttribute('src', 'images/zach-00.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Por favor, ingrese su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = '¡ Zach es genial !, ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = '¡ Zach es genial !, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
  estableceNombreUsuario();
}



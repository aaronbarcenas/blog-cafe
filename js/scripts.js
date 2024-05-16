
// *** QUERY SELECTOR *** //

// && Selecciona un elemento del HTML ya sea por la clase y/o etiqueta o por un ID
const heading = document.querySelector('.header__texto h2')
console.log(heading)


// *** QUERY SELECTOR ALL *** //

// && Selecciona todos los elementos que correspondan a la clase, etiqueta o id seleccionada 
const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)
// ?? Como trae varios elementos podemos acceder a uno de ellos en especifico como en un arreglo
console.log(enlaces[0] ) // arroja el primer selector encontrado
enlaces[0].textContent = 'Nuevo texto para el enlace'  // Cambia el texto en el enlace por el que seleccionamos 
enlaces[0].href = 'https://www.google.com'  // Cambia el a donde nos dirige el enlace
enlaces[0].classList.add('nueva-clase') // Agrega una clase a la etiqueta seleccionada 
enlaces[0].classList.remove('navegacion__enlace')


// *** GENERAR NUEVO CODIGO HTML A PARTIR DE JS *** // 

const nuevoEnlace = document.createElement('A') // Se recomienda crear las etiquetas de HTML en mayusculas 
nuevoEnlace.href = 'nuevo-enlace.html'  // Agrega el href del enlace
nuevoEnlace.textContent = 'Tienda Virtual'  // Agrega el texto al enlace
nuevoEnlace.classList.add('navegacion__enlace')  // Agrega una nueva clase al enlace

// && Agrega el nuevo enlace que creamos con todas sus propiedades al selector deseado
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace)




// *** EVENTOS DE LOS INPUTS Y TEXTAREAS *** //

// !!! Se esta creando un objeto que va a almacenar la informacion que agrege el usuario. Es importante que los atributos del objeto tengan el mismo nombre que el Id que pusimos en las etiquetas del formulario...

const datos = {
  nombre: '',
  email: '',
  mensaje: ''
}

const nombre = document.querySelector('#nombre')
const emai = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto )
email.addEventListener('input', leerTexto )
mensaje.addEventListener('input', leerTexto )

function leerTexto(e) {
  //console.log(e.target.value)
  datos[e.target.id] = e.target.value

  console.log(datos)
}

// && El Evento Submit
formulario.addEventListener('submit', function(evento) {
  evento.preventDefault()

  // ?? Validacion del formulario
  const { nombre, email, mensaje } = datos

  if(nombre === '' || email === '' || mensaje === '' ) {
    //console.log('Todos los datos son obligatorios')
    mostrarError('Todos los campos son obligatorios')
    return
  }

  // ?? Envio del formulario
  console.log('Enviando formulario')
  mostrarEnvio('Enviando formulario OK')
})


// && Mueestra un error en pantalla
function mostrarError(mensaje) {
  const error = document.createElement('P')
  error.textContent = mensaje
  error.classList.add('error')

  formulario.appendChild( error )
  // !!! Mensaje de error desaparece despues de 5 segundos
  setTimeout(() => {
    error.remove()
  }, 5000)
}

// ??? Muestra la alerta de que se envio correctamente
function mostrarEnvio(mensaje) {
  const envio = document.createElement('P')
  envio.textContent = mensaje
  envio.classList.add('envio')
  formulario.appendChild( envio )

  setTimeout(() => {
    envio.remove()
  }, 5000)
}








// *** Escuchar un clic y realizar un evento

// const btnEnviar = document.querySelector('.boton--secundario')
// btnEnviar.addEventListener('click', function(evento) {
//   console.log(evento)
//   evento.preventDefault()
// })
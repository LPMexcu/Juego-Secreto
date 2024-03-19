let intentos = 1
let listaNumerosSorteados = []
let numeroSecreto = 0
let numeroMaximo = 10

function asignarTextoElemento(id, texto) {
  let elementoHTML = document.querySelector(id)

  elementoHTML.innerHTML = texto
}

function intentoDeUsuario() {
  let numeroDeUsuario = parseInt(document.getElementById('valorNumerico').value)

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      'p',
      `Acertaste el número secreto en ${intentos}  ${
        intentos === 1 ? 'intento' : 'intentos'
      }`
    )
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else if (numeroDeUsuario < numeroSecreto) {
    asignarTextoElemento(
      'p',
      'El número secreto es mayor que el que has indicado'
    )
    limpiarCampo()
  } else if (numeroDeUsuario > numeroSecreto) {
    asignarTextoElemento(
      'p',
      'El número secreto es menor que el que has indicado'
    )
    limpiarCampo()
  }
  intentos++
}

function limpiarCampo() {
  document.querySelector('#valorNumerico').value = ''
}

function mensajesIniciales() {
  asignarTextoElemento('h1', 'El juego del numero secreto')
  asignarTextoElemento('p', 'indica un numero del 1 al 100')
}
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1

  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento('p', 'No hay más intentos')
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto()
    } else {
      listaNumerosSorteados.push(numeroGenerado)
      return numeroGenerado
    }
  }
}

function reiniciarJuego() {
  mensajesIniciales()
  numeroSecreto = generarNumeroSecreto()
  intentos = 1
  document.getElementById('reiniciar').setAttribute('disabled', true)
  limpiarCampo()
}

mensajesIniciales()

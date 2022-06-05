$(document).ready(function () {
  $(".sopa").click(() => {
    mensajeBienvenida();
  });

  mensajeBienvenida();

  $("input[type=text]").mayuscula();
  $("input[type=text]").validCampo(soloLetras());
  $("input[type=number]").validCampo(soloNumeros());
  $("input").noCopiar();
});

function mensajeError(texto) {
  swal({
    title: "¡Oh no, ah ocurrido un Error!",
    type: "error",
    html: $("<div>").addClass("some-class").text(texto),
    animation: true,
  });
}

function mensajeOk(texto) {
  swal({
    title: "¡Okey!",
    type: "success",
    html: $("<div>").addClass("some-class").text(texto),
    animation: true,
  });
}

function mensajeBienvenida(texto) {
  swal({
    title: "¡Bienvenido al Sopatizador!",
    text: "Una App pensada para tí, para generar sopa de letras facíl y rapído, olvidate de esos tediosos cuadritos de excel de una vez por todas by: Armando Rojas",
    imageUrl: "img/icono.ico",
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "Custom image",
    animation: true,
  });
}

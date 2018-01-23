document.addEventListener("DOMContentLoaded", function() {
  iniciarWeb();
}, false)

// INICIAR LA CARGA DE LA WEB
function iniciarWeb() {
  // AÑADIR LISTENER PARA BOTONES
  // BOTONES VUELTA A INICIO
  $(".back").click(function() {
    ocultarVistas();
    cambiarVista("index");
  });
  // BOTON NUEVA BOMBONA
  $("#nueva-bombona").click(function() {
    ocultarVistas();
    cambiarVista("crear-bombona");
  });

  // BOTON DETALLES
  $(".btn-detalles").click(function() {
    ocultarVistas();

    console.log($(this).attr("id"));
    cambiarVista("detalles-bombona");
  });

  // CARGAINICIAL
  ocultarVistas();
  cambiarVista("index");
}

// CAMBIAR DE VISTAS
function cambiarVista(vista) {
  $(".page").each(function(i) {
    if (vista == $(this).attr("id")) {
      $(this).show();
    }
  });
}

// OCULTAR VISTAS
function ocultarVistas() {
  $(".page").hide();
}

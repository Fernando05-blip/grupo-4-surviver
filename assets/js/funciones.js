document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito tu nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
      alert('no has escrito tu apellido');
      return;
    }
    var mail = document.getElementById('mail').value;
    if(mail.length == 0) {
      alert('No has escrito tu mail');
      return;
    }
    var comentarios = document.getElementById('comentarios').value;
    if(comentarios.length <= 50) {
      alert('No has escrito ningun comentario');
      return;
    }
    this.submit();
  }

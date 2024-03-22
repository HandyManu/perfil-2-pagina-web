document.getElementById('boton').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });



  document.getElementById('boton1').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  
  document.getElementById('boton2').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

    document.getElementById('boton3').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

   document.getElementById('boton4').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  

  document.getElementById('boton5').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });


  document.getElementById('boton6').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });


  document.getElementById('boton7').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });


  document.getElementById('boton8').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton9').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton10').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton11').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton12').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton13').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });


  document.getElementById('boton14').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton15').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton16').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton17').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton18').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton19').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton20').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton21').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton22').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  document.getElementById('boton23').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.remove('hidden');
  });

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementById('tarjeta').classList.add('hidden');
  });

  const emailInput = document.getElementById('emailInput');
  document.getElementById('formularioCompra').addEventListener('submit', function(event){
    event.preventDefault();
    var email = document.getElementById('email').value;
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexEmail.test(email)){
      Swal.fire({
        title: '¡Compra exitosa!',
      text: 'Recibiras un correo electrónico con el ticket de vuelo.',
      icon: 'success',
      confirmButtonText: 'Genial'
      }).then(() => {
        emailInput.value = '';
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, introduce un correo electrónico válido.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  });


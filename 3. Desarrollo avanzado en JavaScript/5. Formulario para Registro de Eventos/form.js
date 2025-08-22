document.getElementById('registroEvento').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const archivo = document.getElementById('archivo').files[0];
  
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario || !fecha || !hora) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
  
    const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
      alert('El número de teléfono debe contener exactamente 10 dígitos numéricos.');
      return;
    }
  
    const hoy = new Date().toISOString().split('T')[0];
    if (fecha < hoy) {
      alert('La fecha del evento no puede ser anterior a hoy.');
      return;
    }
  
    if (archivo) {
      const formatosPermitidos = ['application/pdf', 'image/jpeg', 'image/png'];
      if (!formatosPermitidos.includes(archivo.type)) {
        alert('El archivo debe ser PDF o imagen (JPG/PNG).');
        return;
      }
  
      const maxSizeMB = 2 * 1024 * 1024;
      if (archivo.size > maxSizeMB) {
        alert('El archivo no debe superar los 2MB.');
        return;
      }
    }
  
    alert('Registro exitoso. ¡Gracias por registrarte!');
    this.reset();
  });
  
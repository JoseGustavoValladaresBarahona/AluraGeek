
       const datos = [];
       const email = document.getElementByName("email");
       const password = document.getElementByName("password");
   function validarSesion(){
      fetch('http://localhost:5000/Admin')
        .then(res => res.json())
        .then(datos =>{
          datos.map(dato =>{
         console.log(dato.correo);
         if(dato.correo ===email && dato.password === password){
           alert("Acceso concedido");
           window.location.href='../Servicios/agregar-producto.html'
         }else 
           alert("Debe ingresar la clave correcta");
          })
        })
   }
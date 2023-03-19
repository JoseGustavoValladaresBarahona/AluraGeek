
       

  function validar(){
       const email = document.getElementById("email");
       const password = document.getElementById("password");
    
      fetch('http://localhost:5000/Admin')
        .then(res => res.json())
        .then(datos =>{
          datos.map(dato =>{
           alert("Acceso concedido");
           "location.href='Servicios/agregar-producto.html'"
          })
        })
        
}
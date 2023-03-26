
const validar = () =>{     
  let correo = document.getElementById("correo").value;
  let password = document.getElementById("password").value;
  let rescorreo = "";
  let respass = "";
      
    fetch("http://localhost:5000/Admin")
      .then(res => res.json())
      .then(json => { 
         json.map(dato =>{
           if(dato.correo === correo && dato.password === password){
           // alert("Acceso concedido");
           window.location.href="Menu-Admin.html"
          }else{
            alert("Su usuario o contraseña es incorrecto, intente de nuevo");
          }
        })
      })
}


        


const btn = document.querySelector('#btn');
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');


const getData = () => {
  const datos = new FormData(formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados;
}

const postData = async () => {
   const newUser = getData();
   try{
    const response = await fetch('http://localhost:5000/Productos', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newUser)
    });
    
    if(response.ok){
        const jsonResponse = await response.json();
        const {imgUrl, categoria, nombre, precio, descripcion} = jsonResponse;
       
        respuesta.innerHTML = 
        `
        <br />
        <div> 
           Se registró con éxito la siguiente información:
          <p> img: ${imgUrl} </p>
          <p>nombre: ${nombre}</p> 
          <p>categoría: ${categoria}<p> 
          <p>precio: ${precio}</p>
          <p>descripción:${descripcion}</p> 
         
        </div>`
    }
   
   }catch(error){
     alert(error);
   }
}

  btn.addEventListener('click', (event) => {
  event.preventDefault();
  postData();
})

 
 
 
 
 
 
 
 
 
 
 

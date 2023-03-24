

const btn = document.querySelector('#btn');
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');
//let Id = document.getElementById('Id').value;

  const getData = () => {
  const datos = new FormData(formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados;
}


const postData = async () => {
  // const newUser = getData();
   try{
    const response = await fetch(`http://localhost:5000/Productos/${id.value}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
   //  body: JSON.stringify(newUser)
    });
    
    if(response.ok){
        const jsonResponse = await response.json();
        const {imgUrl, categoria, nombre, precio, descripcion} = jsonResponse;
       
        respuesta.innerHTML = 
        `
        <br/>
        <div> 
           El registro con ID: ${id.value} se elimino con éxito.
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

 
 
 
 
 
 
 
 
 
 
 

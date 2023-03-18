
 /*const dato = [];*/

    let tbody=document.getElementById("tbody");
    tbody.append(addElement());
    tbodypc.append(addElement());
    
     fetch('http://localhost:5000/Productos?categoria=movil')
      .then(res => res.json())
      .then(json => { 
           json.map(dato =>{
             console.log(dato);
            tbody.append(addElement(dato.imgUrl, dato.categoria, dato.nombre, dato.precio, dato.descripcion, dato.id));
        })
      })

      
      function addElement(imgUrl,categoria, nombre, precio, descripcion, id){
          let td =document.createElement("div");
           td.innerHTML =
         `<img src="${imgUrl}" width="100px" height="100px"/>
          <p>${categoria}</p>
          <p>${nombre}</p>
          <p>${precio}</p>
          <p>${descripcion}</p>
          <p>${id}</p>
           <a src='' href='#'>Ver Productos</a> `
          return td;
      }
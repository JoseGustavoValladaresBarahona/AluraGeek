
    let tbody=document.getElementByName("search");
    
     fetch(`'http://localhost:5000/Productos?nombre=${tbody}'`)
      .then(res => res.json())
      .then(json => { 
           json.map(dato =>{
            tbody.append(addElement(dato.imgUrl, dato.categoria, dato.nombre, dato.precio, dato.descripcion, dato.id));
        })
      })
      
      function addElement(imgUrl,categoria, nombre, precio, descripcion, id){
          let td =document.createElement("div");
           td.innerHTML =
         `<img src="${imgUrl}" width="150px" height="150px"/>
          <p class="justificar">${categoria}</p>
          <p class="justificar">${nombre}</p>
          <p class="justificar">${precio}</p>
          <p class="justificar">${descripcion}</p>
          <p class="justificar">${id}</p>
           <a src='' href='#'>Ver Productos</a> `
          return td;
      }
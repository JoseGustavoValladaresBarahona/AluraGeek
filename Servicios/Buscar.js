
    let tbody=document.getElementById("tbody");
    
     fetch(`'http://localhost:5000/Productos?categoria=${tbody}'`)
      .then(res => res.json())
      .then(json => { 
           json.map(dato =>{
            alert(tbody.append(addElement(dato.imgUrl, dato.categoria, dato.nombre, dato.precio, dato.descripcion, dato.id)));
        })
      })

      function Buscarglobal(imgUrl,categoria, nombre, precio, descripcion, id){
        alert(
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
          );
      }

 
const listaProductos = () =>{
  fetch("http://localhost:5000/Productos").then((respuesta) => respuesta.json())};

const nuevoProducto = (nombre, email) => {
  return fetch("http://localhost:5000/Productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url,categoria,nombre ,precio , descripcion, id: uuid.v4() }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:5000/Productos/${id}`, {
    method: "DELETE",
  });
};

const detalleProducto = (id) => {
  return fetch(`http://localhost:5000/Productos/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarProducto = (nombre, email, id) => {
  return fetch(`http://localhost:5000/Productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url,categoria, nombre, precio, descripcion, id }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clienteServices = {
  listaProductos,
  nuevoProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};

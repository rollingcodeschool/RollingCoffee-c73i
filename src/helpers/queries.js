const URL_Productos = import.meta.env.VITE_API_PRODUCTO;
const URL_Producto = import.meta.env.VITE_API_PRODUCTO_INDIVIDUAL;
const URL_Usuario = import.meta.env.VITE_API_USUARIO;

console.log(URL_Productos);

//GET
export const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(URL_Productos);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

//GET devuelve un producto
export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL_Producto + "/" + id);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//POST
export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URL_Productos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'x-token': JSON.parse(sessionStorage.getItem('usuarioRollingCoffee')).token
      },
      body: JSON.stringify(productoNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT - PATCH
//DELETE

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Producto}/${id}`, {
      method: "DELETE",
      headers: {
      'x-token': JSON.parse(sessionStorage.getItem('usuarioRollingCoffee')).token
      }
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT
export const editarProductoAPI = async (productoModificado, id) => {
  try {
    const respuesta = await fetch(`${URL_Producto}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'x-token': JSON.parse(sessionStorage.getItem('usuarioRollingCoffee')).token
      },
      body: JSON.stringify(productoModificado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//nuevo login usando el backend
export const login = async (usuario) =>{
  try {
    console.log(usuario);
    const respuesta = await fetch(URL_Usuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return  respuesta
  } catch (error) {
    console.log("errores en el login");
    return;
  }
}
import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { leerProductosAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [productos, setProductos] =  useState([]);

useEffect(  ()=>{
  consultarAPI()
}, [])

const consultarAPI = async()=>{
  try{
    const respuesta = await leerProductosAPI();
    setProductos(respuesta);
  }catch (error){
    console.log(error)
  }
}


  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
    
          <Row>
            {
productos.map ((producto)=>(  <CardProducto key={producto.id} producto={producto}></CardProducto>))
            }
          </Row>
       
      </Container>
    </section>
  );
};

export default Inicio;

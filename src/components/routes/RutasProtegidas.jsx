import { Navigate } from "react-router";

const RutasProtegidas = ({children}) => {
    //dada alguna logica entonces mostrar las rutas del admin
    const administrador = JSON.parse(sessionStorage.getItem('usuarioRollingCoffee')) || null;
    //no hay un usuario logueado
    if(!administrador){
        //si no es admin
        return <Navigate to={'/login'}></Navigate>
    }else{
        return children
    }
};

export default RutasProtegidas;
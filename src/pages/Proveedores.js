import React from "react";

class Proveedores extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listaProveedores : []
        }
    }

    componentDidMount(){
        fetch("https://servicios.campus.pe/servicioproveedores.php")
        .then(res => res.json())
        .then(
            (response)=>{
                console.log(response);
                this.setState({
                    listaProveedores : response
                })
            }
        )
    }

    dibujarTabla(datos){
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">idproveedor</th>
                        <th scope="col">Nombre Empresa</th>
                        <th scope="col">Nombre Contacto</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Código Postal</th>
                        <th scope="col">Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((elem)=> 
                            <tr>
                            <th scope="row" key={elem.idproveedor}>{elem.idproveedor}</th>
                            <td>{elem.nombreempresa}</td>
                            <td>{elem.nombrecontacto}</td>
                            <td>{elem.direccion}</td>
                            <td>{elem.ciudad}</td>
                            <td>{elem.codigopostal}</td>
                            <td>{elem.telefono}</td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </>
        )
    }

    render() {
        let tabla = this.dibujarTabla(this.state.listaProveedores);
        return (
             <>
                {tabla}
             </>
        );
    }
}

export default Proveedores;
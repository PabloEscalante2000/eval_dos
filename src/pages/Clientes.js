import React from "react";

class Clientes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listaCliente : []
        }
    }

    componentDidMount(){
        fetch("https://servicios.campus.pe/servicioclientes.php")
        .then(res => res.json())
        .then(
            (response)=>{
                console.log(response);
                this.setState({
                    listaCliente : response
                })
            }
        )
    }

    dibujarCards(datos){
        return (
            <div className="container">
               <div className="row row-cols-3">
                    {datos.map((elem)=>
                        <div className="col" key={elem.idcliente}>
                            <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{elem.usuario}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{elem.empresa}</h6>
                            <p className="card-text">{elem.nombres}</p>
                            <a href="#" className="card-link">{elem.cargo}</a>
                            <a href="#" className="card-link">{elem.telefono}</a>
                        </div>
                        </div>
                        </div>
                    )}
                 </div>
            </div>
        )
    }

    render() {
        let cards = this.dibujarCards(this.state.listaCliente);
        return (
             <>
                {cards}
             </>
        );
    }
}

export default Clientes;
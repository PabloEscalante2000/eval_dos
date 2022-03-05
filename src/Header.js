import React from "react";
import { Link } from "react-router-dom";
import HeaderStyle from "./HeaderStyle.css";

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src="https://demo2wpopal.b-cdn.net/fixtor/wp-content/uploads/2021/09/logo.svg" alt="Fixtor" />  
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Link to="/">Inicio</Link>    
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Link to="/proveedores">Proveedores</Link> 
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link ">
                        <Link to="/clientes">Clientes</Link>    
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            <span className="d-flex">
                GET A FREE QUOTE
            </span>
            </nav>
            </>
        )
    }
}

export default Header;
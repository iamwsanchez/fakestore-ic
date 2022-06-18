import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Navbar extends Component{
    constructor(props){
        super(props)
        this.initSideNav = this.initSideNav.bind(this);
        this.state = {
            
        }
    }
    componentDidMount(){
        this.initSideNav();
    }
    initSideNav() { 

    }
    render(){
        return(
            <header className="px-3 py-2 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"><img src="/assets/img/logo.png" alt="logo"/></Link>
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                            <Link to="/" className="nav-link text-primary text-center">
                                <i className="bi bi-house-door d-block mx-auto mb-1 fs-2"></i>
                                Home
                            </Link>
                            </li>
                            <li>
                            <Link to="/" className="nav-link text-secondary text-center">
                                <i className="bi-speedometer2 d-block mx-auto mb-1 fs-2"></i>
                                Dashboard
                            </Link>
                            </li>
                            <li>
                            <Link to="/" className="nav-link text-secondary text-center">
                                <i className="bi-table d-block mx-auto mb-1 fs-2"></i>
                                Orders
                            </Link>
                            </li>
                            <li>
                            <Link to="/" className="nav-link text-secondary text-center">
                                <i className="bi-person-circle d-block mx-auto mb-1 fs-2"></i>
                                Customers
                            </Link>
                            </li>
                        </ul>
        
                        <div className="dropdown text-end">
                            <Link to="!#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/assets/img/neo.jpg" alt="mdo" className="rounded-circle" width="48" height="48"/>
                            </Link>
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li><Link to="#!" className="dropdown-item">Perfil</Link></li>
                                <li><Link to="#!" className="dropdown-item">Configuración</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link to="#!" className="dropdown-item">Cerrar sesión</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header> 
        )
    }
}

export default Navbar;
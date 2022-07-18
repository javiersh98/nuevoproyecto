import React  from "react";
import {link} from "react-router-dom";
const Sidebar = () => {
    return(
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="#" className="brand-link">  
            </a>
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            </div>
            <nav className="mt-2">
                <ul className="nav nav-pills navsidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                        <link to="/ventas" className="nav-link">
                            <i className="nav-icon fas fa-user" />
                            <p>ventas</p>
                        </link>

                    </li>
                    <li className="nav-item">
                        <link to="/clientes" className="nav-link">
                            <i className="nav-icon fas fa-user" />
                            <p>clientes</p>
                        </link>

                    </li>
                    <li className="nav-item">
                        <link to="/products" className="nav-link">
                            <i className="nav-icon fas fa-user" />
                            <p>Productos</p>
                        </link>
                        <li className="nav-item">
                        <link to="/usuarios" className="nav-link">
                            <i className="nav-icon fas fa-user" />
                            <p>Usuarios</p>
                        </link>

                    </li>

                    </li>
                </ul>                 
            </nav>
        </aside>
    )
}
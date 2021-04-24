import React from "react";
import {NavLink} from "react-router-dom";

export class Menu extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Меню
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active"><NavLink to="/" className="nav-link pl-0">Главная</NavLink></li>
                            <li className="nav-item"><NavLink to="/aboutus" className="nav-link">О нас</NavLink></li>
                            <li className="nav-item"><NavLink to="/dentalservice" className="nav-link">Стоматологические услуги</NavLink></li>
                            <li className="nav-item"><NavLink to="/elseservice" className="nav-link">Прочие услуги</NavLink></li>
                            <li className="nav-item"><NavLink to="/feedback" className="nav-link">Отзывы</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact" className="nav-link">Контакты</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
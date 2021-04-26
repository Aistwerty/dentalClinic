import React from "react";
import {NavLink} from "react-router-dom";

export class Menu extends React.Component{

    hiddenMenu(){
        const screenWidth = window.screen.availWidth;
        if (screenWidth < 992){document.getElementById("navbutton").click();}
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" id="navbutton">
                        <span className="oi oi-menu"></span> Меню
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active"><NavLink to="/" className="nav-link pl-0" onClick={this.hiddenMenu}>Главная</NavLink></li>
                            <li className="nav-item"><NavLink to="/aboutus" className="nav-link" onClick={this.hiddenMenu}>О нас</NavLink></li>
                            <li className="nav-item"><NavLink to="/dentalservice" className="nav-link" onClick={this.hiddenMenu}>Стоматологические услуги</NavLink></li>
                            <li className="nav-item"><NavLink to="/elseservice" className="nav-link" onClick={this.hiddenMenu}>Прочие услуги</NavLink></li>
                            <li className="nav-item"><NavLink to="/feedback" className="nav-link" onClick={this.hiddenMenu}>Отзывы</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact" className="nav-link" onClick={this.hiddenMenu}>Контакты</NavLink></li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
import React from "react";

export class TopBar extends React.Component{
    render() {
        return(
            <div className="py-md-5 py-4 border-bottom">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
                        <div className="col-md-4 order-md-2 mb-2 mb-md-0 align-items-center text-center">
                            <a className="navbar-brand" href="/">Стомадент<span>Стоматологический кабинет</span></a>
                        </div>
                        <div
                            className="col-md-4 order-md-1 d-flex topper mb-md-0 mb-2 align-items-center text-md-right">
                            <div className="icon d-flex justify-content-center align-items-center order-md-last">
                                <span className="icon-map"/>
                            </div>
                            <div className="pr-md-4 pl-md-0 pl-3 text">
                                <p className="hr"><span>Телефоны:</span></p>
                                    <a className="btns" href="tel:+7 (34241) 3-56-56"><span>+7 (34241) 3-56-56</span></a><br/>
                                    <a className="btns" href="tel:+7 (922) 33-00-204"><span>+7 (922) 33-00-204</span></a>
                            </div>
                        </div>
                        <div className="col-md-4 order-md-3 d-flex topper mb-md-0 align-items-center">
                            <div className="icon d-flex justify-content-center align-items-center"><span className="icon-paper-plane"/></div>
                            <div className="text pl-3 pl-md-3">
                                <p className="hr"><span>Время работы:</span></p>
                                <p className="time">Пн - Пт: <span>9:00 - 18:00</span></p><p className="time"> Сб: <span>9:00 - 14:00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
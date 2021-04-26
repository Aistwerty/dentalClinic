import React from "react";
import {NavLink} from "react-router-dom";

export class Footer extends React.Component{
    render() {
        return(
            <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-5 ml-md-4">
                                <h2 className="ftco-heading-2">Меню</h2>
                                <ul className="list-unstyled">
                                    <li><NavLink to="/" ><span className="ion-ios-arrow-round-forward mr-2"/>Главная</NavLink>
                                    </li>
                                    <li><NavLink to="/aboutus"><span className="ion-ios-arrow-round-forward mr-2"/>О нас</NavLink>
                                    </li>
                                    <li><NavLink to="/dentalservice"><span className="ion-ios-arrow-round-forward mr-2"/>Стоматологические услуги</NavLink>
                                    </li>
                                    <li><NavLink to="/elseservice"><span className="ion-ios-arrow-round-forward mr-2"/>Прочие услуги</NavLink>
                                    </li>
                                    <li><NavLink to="/feedback"><span className="ion-ios-arrow-round-forward mr-2"/>Отзывы</NavLink>
                                    </li>
                                    <li><NavLink to="/contact"><span className="ion-ios-arrow-round-forward mr-2"/>Контакты</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-5">
                                <h2 className="ftco-heading-2 logo">Контакты</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon icon-map-marker"/><span className="text">РФ, Пермский край, г.Чайковский,ул.Ленина, д.61/1, оф.30 (ДБ Элегант)</span>
                                        </li>
                                        <li><a href="tel:+7 (34241) 3-56-56"><span className="icon icon-phone"/><span className="text">+7 (34241) 3-56-56 <br/> +7 (922) 33-00-204</span></a>
                                        </li>
                                        <li><a href="mailto:stomadent.chk@gmail.com"><span className="icon icon-envelope"/><span className="text">stomadent.chk@gmail.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-5">
                                <h2 className="ftco-heading-2 logo">ООО "Стомадент"</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon-chevron-right"/><span className="text">&nbsp;&nbsp;ИНН:	5920021730</span>
                                        </li>
                                        <li><span className="icon-chevron-right"/><span className="text">&nbsp;&nbsp;ОГРН: 1055906280638</span>
                                        </li>
                                        <li><span className="icon-chevron-right"/><span className="text">&nbsp;&nbsp;КПП:	592001001</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-5">
                                <h2 className="ftco-heading-2">Время работы</h2>
                                <h3 className="open-hours pl-4"><span className="ion-ios-time mr-3"/>Пн - Пт: 9:00 - 18:00 <br/> Сб: 9:00 - 14:00 Вс: вых.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <p>
                                Copyright &copy;
                                2021. ООО "Стомадент" (Сайт выполнен Ступеньковым А.И. 26.04.2021)
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
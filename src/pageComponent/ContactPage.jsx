import React from "react";

export class ContactPage extends React.Component{
    render() {
        return(
            <div>
                <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
                    <div className="container">
                        <div className="row d-flex align-items-stretch no-gutters">
                            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
                                <form action="#">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Имя"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="mail" className="form-control" placeholder="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control" placeholder="Номер телефона" pattern="[0-9-]$"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Тема сообщения"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Текст Вашего сообщения"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Отправить сообщение" className="btn btn-primary py-3 px-5"/>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch bg-light">
                                <div className="col-lg py-5 mx-auto">
                                    <iframe title="yandexmap"
                                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3497364036955f028e4c0a82bc523f55a2a970217349724c5083efee8feb77e9&amp;source=constructor"
                                            width="100%" height="98%" frameBorder="0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section contact-section">
                    <div className="container">
                        <div className="row d-flex mb-5 contact-info">
                            <div className="col-md-12 mb-4">
                                <h2 className="h4">Контактная информация</h2>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-3 d-flex">
                                <div className="bg-light d-flex align-self-stretch box p-4">
                                    <p><span>Адрес:</span> <br/> РФ, Пермский край, г.Чайковский,ул.Ленина, д.61/1, оф.30 (ДБ Элегант)</p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="bg-light d-flex align-self-stretch box p-4">
                                    <p><span>Телефон:</span> <br/><a href="tel:+7 (34241) 3-56-56">+7 (34241) 3-56-56</a> <br/>
                                        <a href="tel:+7 (922) 33-00-20">+7 (922) 33-00-20</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="bg-light d-flex align-self-stretch box p-4">
                                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">stomadent.chk@google.com</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="bg-light d-flex align-self-stretch box p-4">
                                    <p><span>Социальные сети:</span> <br/>
                                        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                                            <li><a href="https://vk.com/club100932548"><span className="icon-vk"/></a></li>
                                            <li><a href="https://https://ok.ru/"><span className="icon-odnoklassniki"/></a></li>
                                            <li><a href="https://www.instagram.com/?hl=ru"><span className="icon-instagram"/></a></li>
                                            <li><a href="https://www.facebook.com/"><span className="icon-facebook"/></a></li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
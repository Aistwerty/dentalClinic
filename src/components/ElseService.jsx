import React from "react";

export class ElseServices extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.changeH1("Прочие услуги");
    }

    render() {
        return(
            <div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-4">
                            <img src="../images/s6.jpg" width="100%" alt=""/>
                        </div>
                        <div className="col-sm-8">
                            <div className="container text-center">
                                <h3>Пирсинг (прокол ушей)</h3>
                            </div>
                            <p align="justify">
                                &nbsp;&nbsp;&nbsp; Многие помнят, что прокол ушей, особенно перевый, это неприятно, больно и сопряжено с возможными осложнения, но не у нас.<br/>
                                &nbsp;&nbsp;&nbsp; В рамках нашей клиники мы расширили ассортимент оказываемых услуг и ввели дополнительные услуги по проколу ушей. <br/>
                                &nbsp;&nbsp;&nbsp; Мы используем современное оборудование для прокола ушей, позволяющее провести процедуру максимально быстро и безболезнено.<br/>
                                &nbsp;&nbsp;&nbsp; В наличие большой ассортимент сережек из высококачественной медицинской стали и сплавов, обеспечивающих безопасное проведение процедуры и сведения к минимуму негатиивных последствий.<br/>
                            </p>
                            <h4>
                                Без крови, без боли, быстро, качествено и безопасно! У нас не плачут даже дети!
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
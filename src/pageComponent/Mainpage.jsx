import React from "react";
import {BrowserRouter} from "react-router-dom";
import {CallMeBack} from "../components/CallMeBack";

export class Mainpage extends React.Component{
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <BrowserRouter>
              <div className="container">
                <div className="container py-4"/>
                <div className="row fullscreen d-flex justify-content-center align-items-center" >
                    <div className="banner-content col-lg-9 col-md-12 justify-content-center text-center" style={{backgroundImage: `url('images/image/cab-3.jpg')`, backgroundSize: 'cover', height: '400px' }}>
                        <h1 className="text-danger"><strong>Зубная боль?!</strong></h1>
                        <h1 className="text-danger"><strong>Не смогли дозвониться?!</strong></h1>
                        <h4 className="text-danger"> <strong>
                            Оставьте заявку на обратный звонок!
                        </strong></h4>
                        <a href="" className="btn btn-secondary" data-toggle="modal" data-target="#staticBackdrop">Оставить заявку</a>
                    </div>
                </div>
                <div className="container py-4"/>
              </div>
              <CallMeBack/>
            </BrowserRouter>

        )
    }
}
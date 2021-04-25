import React from "react";
import {BrowserRouter} from "react-router-dom";
import {ConsultService} from "../components/ConsultService";
import {CosmeticDentalService} from "../components/CosmeticDentalService";
import {CariesTreat} from "../components/CariesTreat";
import {ToothProtez} from "../components/ToothProtez";

export class DentalServicesPage extends React.Component{
    constructor(props) {
        super(props);
        }

    componentDidMount() {
        this.props.changeH1("Стоматологические услуги");
    }

    render() {
        return(
            <div>
            <BrowserRouter>
                <ConsultService/>
                <CosmeticDentalService/>
                <CariesTreat/>
                <ToothProtez/>
            </BrowserRouter>
           </div>
        )
    }
}
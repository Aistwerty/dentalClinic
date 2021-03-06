import React from "react";
import {BrowserRouter} from "react-router-dom";
import {ClientsFeedback} from "../components/ClientsFeedback";
import {AddFeedback} from "../components/AddFeedback";
import {ClientsFeedb} from "../components/ClientsFeedb";

export class FeedBackPage extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.changeH1("Отзывы");
    }

    render() {
        return(
            <BrowserRouter>
                <ClientsFeedb/>
                <AddFeedback/>
            </BrowserRouter>
        )
    }
}
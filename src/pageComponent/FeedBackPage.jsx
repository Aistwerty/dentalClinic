import React from "react";
import {BrowserRouter} from "react-router-dom";
import {ClientsFeedback} from "../components/ClientsFeedback";
import {AddFeedback} from "../components/AddFeedback";

export class FeedBackPage extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <BrowserRouter>
                <ClientsFeedback/>
                <AddFeedback/>
            </BrowserRouter>
        )
    }
}
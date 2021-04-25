import React from "react";

export class BreadCrumb extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url('images/bg_1.jpg')`}}
                     data-stellar-background-ratio="0.5">
                <div className="overlay"/>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <h1 className="mb-2 bread">{this.props.h1}</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
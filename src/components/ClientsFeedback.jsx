import React from "react";

function ViewFeedback (props){
    return(
        <div className="col-md-4 ftco">
            <div className="blog-entry">
                <div className="text bg-white p-4">
                    <p>{props.text}</p>
                    <div className="d-flex align-items-center mt-4">
                        <p className="mb-1">{props.client} </p>
                        <p className="ml-auto mb-0">
                            <a href="" className="mr-2">{props.date_added}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export class ClientsFeedback extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            feedback:[]
        }
    }

    componentDidMount() {
        fetch("http://stomadent.aistwerty.beget.tech/php/getFeedback.php")
            .then(response=>response.json())
            .then(result=>{
                this.setState({
                    feedback: result.map(feedback=><ViewFeedback
                        key={feedback.id}
                        text={feedback.text}
                        client={feedback.client}
                        date_added={feedback.date_added.slice(0,10)}
                        id={feedback.id}
                    />)
                });
            })
    }

    render() {
        return(
                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row">
                            {this.state.feedback}
                        </div>
                        <div className="row no-gutters my-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a href="#"><i className="ion-ios-arrow-back"></i></a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#"><i className="ion-ios-arrow-forward"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


        )
    }
}


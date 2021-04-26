import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function ViewFeedback (props){
    return(
        <div class="col pt-4 ftco">
            <div className="blog-entry">
                <div className="text bg-light p-4">
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

export class ClientsFeedb extends React.Component{
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
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };
        return(
            <div className="container pt-4">
                <Carousel responsive={responsive}>
                    {this.state.feedback}
                </Carousel>
            </div>


        )
    }
}


import './App.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom"
import {TopBar} from "./components/TopBar";
import {Menu} from "./components/Menu";
import {Footer} from "./components/Footer";
import {Mainpage} from "./pageComponent/Mainpage";
import {ElseServices} from "./components/ElseService";
import {BreadCrumb} from "./components/BreadCrumb";
import {DentalServicesPage} from "./pageComponent/DentalServicesPage";
import {AboutUsPage} from "./pageComponent/AboutUsPage";
import {FeedBackPage} from "./pageComponent/FeedBackPage";
import {ContactPage} from "./pageComponent/ContactPage";
import {ModalWindow} from "./components/ModalWindow";


class App extends React.Component{
    constructor() {
        super();
        this.changeH1 = this.changeH1.bind(this);
        this.state = {
            h1: ""
        }
    }

    changeH1(title){
        this.setState({
            h1: title
        })
    }

    render() {
    return(
        <div>
        <BrowserRouter>
            <TopBar/>
            <Menu/>
            <BreadCrumb h1={this.state.h1}/>
            <Route exact path="/" render={()=><Mainpage changeH1={this.changeH1}/>} />
            <Route path="/aboutus" render={()=><AboutUsPage changeH1={this.changeH1}/>} />
            <Route path="/dentalservice" render={()=><DentalServicesPage changeH1={this.changeH1}/>} />
            <Route path="/elseservice" render={()=><ElseServices changeH1={this.changeH1}/>} />
            <Route path="/feedback" render={()=><FeedBackPage changeH1={this.changeH1}/>} />
            <Route path="/contact" render={()=><ContactPage changeH1={this.changeH1}/>} />
            <ModalWindow/>
            <Footer/>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;

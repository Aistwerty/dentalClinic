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


class App extends React.Component{
  render() {
    return(
        <BrowserRouter>
            <TopBar/>
            <Menu/>
            <BreadCrumb/>
            <Route exact path="/" render={()=><Mainpage/>} />
            <Route path="/aboutus" render={()=><AboutUsPage/>} />
            <Route path="/dentalservice" render={()=><DentalServicesPage/>} />
            <Route path="/elseservice" render={()=><ElseServices/>} />
            <Route path="/feedback" render={()=><FeedBackPage/>} />
            <Route path="/contact" render={()=><ContactPage/>} />
            <Footer/>
        </BrowserRouter>
    )
  }
}

export default App;

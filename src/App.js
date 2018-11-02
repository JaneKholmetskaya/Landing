import React, { Component, Fragment } from 'react';
import Header from "./components/Headers/Headers";
import Banner from "./components/Banner/Banner";
import HowItWorks from "./components/How_it_works/How_it_works";
import SubmitSection from "./components/SubmitSection/SubmitSection";
import Info from "./components/Info/Info";
import Sale from "./components/Sale/Sale";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


class App extends Component {
   render() {
        return (
            <Fragment>
                <Header  />   
                <Banner />  
                <HowItWorks />    
                <SubmitSection /> 
                <Info />  
                <Sale /> 
                <Contacts /> 
                <Footer /> 
            </Fragment>
    );
  }
}

export default App;

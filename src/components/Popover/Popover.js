import React, { Component } from 'react';
import popover from "../../images/popover.png";
import { Image } from 'react-bootstrap';
import "./Popover.css";


class Popover extends Component {


    render() {
        return (
            <div className="popoverForm">     
                <Image src = {popover}/>
            </div>
        );
    }
}

export default Popover;

import React, { Component } from 'react';
import top from "../../images/header_line_up.png";
import bottom from "../../images/header_line_down.png";

import "./HeaderSection.css";
import "../../App.css";
import { Image } from 'react-bootstrap';




class HeaderSection extends Component {
	
	render() {
		const { text } = this.props;
		return (
			<div className = 'header_section'>
                <Image src = {top} />
                <h2 className="header_section-text">{text}</h2>
                <Image src = {bottom} />                
			</div>
		);
	}
}

export default HeaderSection;

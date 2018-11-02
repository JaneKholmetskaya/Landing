import React, { Component } from 'react';
import logo from "../../images/logo.png";
import ModalWindow from "../Modal/Modal"

import "./Headers.css";
import {
	Navbar,
	Nav,
	NavItem,
	Image,
	Button,
	Row
}
	from 'react-bootstrap'


class Header extends Component {
	constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }
	render() {
		return (
			<Row style={{margin:0}} >
				<Navbar className="header-navbar">	
					<Navbar.Header >				
						<Image src={logo} />	 									
					<Navbar.Toggle />
					</Navbar.Header>	
					<Navbar.Collapse >
						<Nav pullRight>
							<NavItem eventKey={1} href="#how_it_works">Шаг за шагом</NavItem>
							<NavItem eventKey={2} href="#info">Почему это работает? </NavItem>
							<NavItem eventKey={3} href="#sale">Акция</NavItem>
							<NavItem eventKey={4} href="#contacts">Контакты</NavItem>
							<NavItem >
								<Button className = 'header-btn' onClick={this.handleShow}>Оставить заявку</Button>
								<ModalWindow show={this.state.show} onHide={this.handleClose}/>
							</NavItem>
						</Nav>				
					</Navbar.Collapse>
				</Navbar>
			</Row>
		);
	}
}

export default Header;

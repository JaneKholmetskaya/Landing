import React, { Component } from 'react';
import ModalWindow from "../Modal/Modal";
import "./Banner.css";
import "../../App.css";
import { Button } from 'react-bootstrap';


class Banner extends Component {
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
			<div className = 'banner'>
                <div className="container">
                    <h1 className = 'content-header'>Как быстро похудеть?</h1>
                    <h3 className = 'content-subheader'>Более 200 довольных клиентов</h3>
                    <Button  className = 'content-btn' onClick={this.handleShow}>УЗНАТЬ БОЛЬШЕ</Button>
					<ModalWindow show={this.state.show} onHide={this.handleClose}/>
                </div>
			</div>
		);
	}
}

export default Banner;

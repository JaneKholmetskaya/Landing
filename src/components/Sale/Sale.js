import React, { Component} from 'react';
import "./Sale.css";
import "../../App.css";
import { Button } from 'react-bootstrap';
import ModalWindow from "../Modal/Modal";


class Sale extends Component {
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
            <div className="sale" id = 'sale'>
                <div className="sale-left">
                    <div className="sale-left-text">
                        <p className="sale-left-img-text text-bold">Персональный тренер</p>
                        <p className="sale-left-img-text">3000 грн/мес</p>
                    </div>
                </div>
                <div className="sale-content">
                    <h2 className="sale-content-header">Акция</h2>
                    <p className="sale-content-text">Персональный тренер</p>
                    <p className="sale-content-text">+</p>
                    <p className="sale-content-text ">Диетолог</p>
                    <p className="sale-content-text sale-content-text-num">3000 грн/мес</p>
                    <Button type="submit" className = 'content-btn sale-btn' onClick={this.handleShow}>ЗАПИСАТЬСЯ</Button>
                    <ModalWindow show={this.state.show} onHide={this.handleClose}/>
                </div>
                <div className="sale-right">
                    <div className="sale-right-text">
                        <p className="sale-right-img-text text-bold">Диетолог</p>
                        <p className="sale-right-img-text">1000 грн/мес</p>
                    </div>
                </div>               
            </div>
        );
    }
}

export default Sale;

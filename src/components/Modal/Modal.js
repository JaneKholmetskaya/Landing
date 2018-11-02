import React, { Component } from 'react';
import { Modal,  Image } from 'react-bootstrap';
import FormUser from '../Form/Form';
import logo from "../../images/logo.png";
import "./Modal.css";


class ModalWindow extends Component {


    render() {
        return (
            <div className="modal">
                <Modal   {...this.props}>
                    <div className='content-wrap-btn'>
                        <div onClick={this.props.onHide} className='close-btn'>+</div>
                    </div>               
                    <div className='modal-content-info'>
                        <Image src={logo} className = 'modal-content-logo' />
                        <p>Надоели попытки похудеть?</p>
                        <p className='modal-content-text'>Получи результат с программой</p>
                        <p className='modal-content-text'>"Тренер + Диетолог"</p>
                        <div className='modal-form' >
                            <FormUser />  
                        </div>                   
                    </div>      
                </Modal>
            </div>
        );
    }
}

export default ModalWindow;

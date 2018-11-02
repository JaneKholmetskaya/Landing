import React, { Component } from 'react';
import FormUser from '../Form/Form';
import "./SubmitSection.css";
import "../../App.css";


class SubmitSection extends Component {
    render() {
        return (
            <div className='submit-section'>
                <div className="container">
                    <h1 className='content-header'>Оставьте заявку на программу</h1>
                    <h3 className='content-subheader'>И наши менеджеры с вами свяжутся</h3>
                    <div className='submit-section-form'>
                        <FormUser />  
                    </div>
                </div>
            </div>
        );
    }
}

export default SubmitSection;

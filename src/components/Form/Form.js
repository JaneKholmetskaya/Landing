import React, { Component, Fragment } from 'react';
import { Button, FormGroup, FormControl, Form } from 'react-bootstrap';
import FormErrors from '../FormErrors/FormErrors';
import Popover from '../Popover/Popover';
import axios from 'axios';

class FormUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameUser: '',
            phoneUser: '',
            formErrors: { nameUser: '', phoneUser: '' },
            nameUserValid: false,
            phoneUserValid: false,
            formValid: false,
            popoverForm: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameUserValid = this.state.nameUserValid;
        let phoneUserValid = this.state.phoneUserValid;

        switch (fieldName) {
            case 'nameUser':
                nameUserValid = value.match(/^[A-zА-я, -]{1,20}/)
                fieldValidationErrors.nameUser = nameUserValid ? '' : 'Введите имя';
                break;
            case 'phoneUser':
                phoneUserValid = value.match(/^[0-9,+ ()-]{1,20}/)
                fieldValidationErrors.phoneUser = phoneUserValid ? '' : 'Введите правильный номер телефона';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            nameUserValid: nameUserValid,
            phoneUserValid: phoneUserValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.nameUserValid && this.state.phoneUserValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            nameUser: this.state.nameUser,
            phoneUser: this.state.phoneUser
        };
            axios({
                method: 'post',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: 'send.php',
                data: user,
            })
            .then(() => {
                this.setState({
                    	popoverForm: true,
                })
            })
    }

    render() {
        const { popoverForm } = this.state;
        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formInlineName" className={`${this.errorClass(this.state.formErrors.nameUser)}`}>
                        <FormControl
                            type="text"
                            required
                            placeholder="Имя"
                            name='nameUser'
                            className='form-input'
                            value={this.state.nameUser}
                            onChange={this.handleUserInput}
                        />
                    </FormGroup>
                    <FormGroup controlId="formInlinePhone" className={`${this.errorClass(this.state.formErrors.phoneUser)}`}>
                        <FormControl
                            type="text"
                            required
                            placeholder="Телефон"
                            name='phoneUser'
                            className='form-input'
                            value={this.state.phoneUser}
                            onChange={this.handleUserInput}
                        />
                    </FormGroup>
                    <Button type="submit" className='content-btn submit-section-form-btn' >Оставить заявку</Button>
                    <FormErrors formErrors={this.state.formErrors} />
                    { popoverForm && <Popover /> }     
                </Form>
                        
            </Fragment>
        );
    }
}

export default FormUser;

import React from 'react';
import { Image } from 'react-bootstrap';
import caution from "../../images/caution.png";

const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
            <div className='error-form'>
                <Image src={caution}></Image>
                <p key={i} className='error-form-text'>{formErrors[fieldName]}</p>
            </div>
        )        
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors;
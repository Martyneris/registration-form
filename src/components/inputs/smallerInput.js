import React from 'react';
import { isFieldValid } from '../../utils/validations.js'

const SmallerInput = ({ value, placeholder, title, onChange }) => {
    return (
        <input
            className={value && title? ( isFieldValid(value, title)? "smaller-input" : "smaller-input-error") : "smaller-input"}
            onChange={onChange}
            value={value}
            type={title === "house"? "number": "text"}
            placeholder={placeholder} />
    )
}

export default SmallerInput
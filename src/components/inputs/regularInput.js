import React from 'react';
import { isFieldValid } from '../../utils/validations.js'

const RegularInput = ({ value, placeholder, title, onChange }) => {
    return (
        <input
            className={value && title? ( isFieldValid(value, title)? "input" : "error") : "input"}
            onChange={onChange}
            value={value}
            type="text"
            style={{ textTransform: title === "email"? "lowercase" : "capitalize" }}
            placeholder={placeholder} />
    )
}

export default RegularInput
import React from 'react';

const Button = ({ label, onPress, style }) => {
    return (
        <div className="button" onClick={onPress} style={style}>
            <h2 className="h2">{label}</h2>
        </div>
    )
}

export default Button
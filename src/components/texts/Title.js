import React from 'react';

const Title = ({ text, onClick }) => {
    return (
        <div className="title" onClick={onClick}>
            <h3 className="h2">{text}</h3>
        </div>
    )
}

export default Title
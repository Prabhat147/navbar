import React from 'react';

const Button = ({color}) => {
    return (
        <div>
            <button type="submit" style={{color:color}} >This is button</button>
        </div>
    );
}

export default Button;

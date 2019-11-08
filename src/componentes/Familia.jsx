import React from 'react';

export default props =>(
    <div>
        <h3>Familia {props.sobrenome}</h3>
        {props.children}
    </div>
)
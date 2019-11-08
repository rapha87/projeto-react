import React from 'react';
export default props =>(
    <div>
        <h3>Familia</h3>
        {/* distribuindo caracteristica dos pais para todos os filhos */}
        {React.Children.map(props.children, filho=>{
            return React.cloneElement(filho, {...props})
        })}
        {/* {React.cloneElement(props.children, {...props})}- serve apenas para um unico individuo */}
        {/* {React.cloneElement(props.children,
            {sobrenome: props.sobrenome})} */}
    </div>
)
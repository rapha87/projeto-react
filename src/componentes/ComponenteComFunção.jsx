import React from 'react';

const aprovados = ['Paula', 'João', 'Alex', 'Anderson']
aprovados.push('Marcos')

export default props =>{
    const gerarItem = itens =>{
        return itens.map(item =><li>{item}</li>) 
    }
    return(
        <ul>
            {gerarItem(aprovados)}
        </ul>
    ) 
}
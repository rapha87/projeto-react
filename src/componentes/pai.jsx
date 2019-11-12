import React from 'react';
import Filho from './filho';

export default () => {
    const notificarSaida = lugar=> alert(`Saída liberada para ${lugar}`)
    return (
        <div>
            <Filho notificarSaida= {notificarSaida}/>
        </div>
    )
}

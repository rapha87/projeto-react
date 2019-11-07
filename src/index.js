import ReactDOM from 'react-dom';
import React from 'react';
//import PrimeiroComponenmente from './componentes/PrimeiroComponmente'
import {CompA, CompB as B} from './componentes/DoisComponente'
import MultiElementos from './componentes/MultiElementos'
const elemente = document.getElementById('root')
ReactDOM.render(
    <div>
        {/*<MultiElementos/>*/}
        <CompA valor="Olá, eu sou A"></CompA>
        <B valor="B na área"></B>
        {/*<PrimeiroComponenmente valor= 'Bom dia'/>*/}
    </div>
, elemente)



/*
ReactDOM.render(jsx, elemente)
const jsx = <h1>Olá React!</h1>
*/
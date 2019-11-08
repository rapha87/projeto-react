import ReactDOM from 'react-dom';
import React from 'react';
//import PrimeiroComponenmente from './componentes/PrimeiroComponmente'
//import {CompA, CompB as B} from './componentes/DoisComponente'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSantos from './componentes/FamiliaSantos'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemente = document.getElementById('root')
ReactDOM.render(
    <div>
        <Familia sobrenome = 'Pereira'>
            <Membro nome= 'André' sobrenome = 'Pereira'/>
            <Membro nome= 'Mariana' sobrenome = 'Pereira'/>
        </Familia>
        <Familia sobrenome = 'Silva'>
            <Membro nome = 'Marcus' sobrenome = 'Silva'/>
            <Membro nome = 'Jose' sobrenome = 'Siva'/>
        </Familia>


            {/* <FamiliaSantos/> */}
            {/*<MultiElementos/>*/}
            {/* <CompA valor="Olá, eu sou A"></CompA>
        <B valor="B na área"></B> */}
            {/*<PrimeiroComponenmente valor= 'Bom dia'/>*/}
    </div>, elemente)
        
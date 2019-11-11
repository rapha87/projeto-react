import ReactDOM from 'react-dom';
import React from 'react';
//import PrimeiroComponenmente from './componentes/PrimeiroComponmente'
//import {CompA, CompB as B} from './componentes/DoisComponente'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSantos from './componentes/FamiliaSantos'
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
import ComponenteComFunção from './componentes/ComponenteComFunção'

const elemente = document.getElementById('root')
ReactDOM.render(
    <div>
        <ComponenteComFunção/>
        {/* <Familia sobrenome = 'Pereira'>
            <Membro nome= 'André'/>
            <Membro nome= 'Mariana'/>
        </Familia> */}
        {/* <FamiliaSantos sobrenome = 'Silva'/> */}
            {/*<MultiElementos/>*/}
            {/* <CompA valor="Olá, eu sou A"></CompA>
        <B valor="B na área"></B> */}
            {/*<PrimeiroComponenmente valor= 'Bom dia'/>*/}
    </div>, elemente)
        
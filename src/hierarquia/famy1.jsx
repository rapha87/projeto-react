import React from 'react';
import Membro from './membro2';
export default props => (
    <div>
        <Membro nome = 'Marcus' sobrenome = {props.sobrenome}/>
        <Membro nome = 'João' sobrenome = {props.sobrenome}/>
        <Membro nome = 'Alex' sobrenome = {props.sobrenome}/>
    </div>     
)
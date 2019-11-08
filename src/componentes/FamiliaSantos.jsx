import React from 'react';
import Membro from './Membro';

export default props => (
    <div>
        <Membro nome = 'Rafael' sobrenome = {props.sobrenome}/>
        <Membro nome = 'Cristiane' sobrenome = {props.sobrenome}/>
        <Membro nome = 'José' sobrenome = {props.sobrenome}/>
        <Membro nome = 'Ana' sobrenome = {props.sobrenome}/>
    </div>
)
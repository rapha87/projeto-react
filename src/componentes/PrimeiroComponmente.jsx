import React from 'react';
let islegal= true
export default (props) => (
    <div>
        <h1>{props.valor}</h1>
        <h2>{1+1}</h2>
        <p>legal?{islegal? 'sim' : 'não'}</p>
        <p>{Math.random()}</p>
    </div>
)



/*export default () => (
    <div>
        <h1>Primeiro componente (Arrow function)</h1>
    </div>
)

export default function () {
   return <h1>Primeiro componente</h1>
}


const primeiro= () => (
    <h1>Primeiro componente</h1>
)
export default primeiro*/
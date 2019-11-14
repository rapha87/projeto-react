import React, {Component} from 'react';

export default class Contador extends Component {
    state = {
        numero:0
      
    }
    // maisUm= () => {
    //     this.setState({ numero1: this.state.numero1 +1 })
    // }
    // menosUm = () => {
    //     this.setState({numero1: this.state.numero1 -1 })
    
    alterar= dif =>{
        this.setState({numero: this.state.numero + dif})
    }

    render() {
        return (
            <div >
                <div>Números:{this.state.numero}</div>
                <button onClick={()=>this.alterar(-1)}>Dec</button>
                <button onClick={()=>this.alterar(1)}>Inc</button>
            </div>
        )
    }
}
                
//solução 1

//constructor(props){
//super(props)
//this.maisUm = this.maisUm.bind(this)

//solução 2

//()=>this.maisUm()
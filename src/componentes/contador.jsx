import React, {Component} from 'react';

export default class Contador extends Component {
    state = {
        numero1:0,
        numero2:0
      
    }
    maisUm= (event) => {
        this.setState({[event.target.name]: parseInt(event.target.value)+1 })
    }
    menosUm = (event) => {
        this.setState({[event.target.name]: parseInt(event.target.value) - 1})
    }

    render() {
        return (
            <div >
                <div>Números:{this.state.numero1}</div>
                <button name='numero1' value ={this.state.numero1} onClick={this.menosUm}>Dec</button>
                <button name='numero1' value ={this.state.numero1} onClick={this.maisUm}>Inc</button>
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
import React, {Component} from 'react';

export default class Componentlasse extends Component {
    render() {
        return(
        <h2>{this.props.valor || 'padrão'}</h2>
        )
    }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.contador} />
                <CounterControl label="Increment" clicked={this.props.incrementarContador} />
                <CounterControl label="Decrement" clicked={this.props.decrementarContador} />
                <CounterControl label="Add 5" clicked={this.props.incrementarFiveContador} />
                <CounterControl label="Subtract 5" clicked={this.props.decrementarFiveContador} />
            </div>
        );
    }
}

// El capturador de los estados que requiere este componente para reaccion de manera dinamica
// Los estados lo convertiremos en propiedades(props) la cual podremos usar de forma unica en nuestro componente
// or mapStateToProps
const EstadosAPropiedades = estado => {
    return {
        contador: estado.contador
    };
};
// Funciones usadas por props
const CambiosDeEstados = accion => {
    return {
        incrementarContador: () => accion({type: 'INCREMENT'}),
        decrementarContador: () => accion({type: 'DECREMENT'}),
        incrementarFiveContador: () => accion({type: 'ADD 5'}),
        decrementarFiveContador: () => accion({type: 'SUBSTRACT 5'}),
    };
};
// Connect de react-redux lo que hace es que nos conecta al estado que tenemos en el almacenamiento de todos los estados y nosotros teniendo la libertad de usarlas de la maqnera que gustemos en el componente
export default connect(EstadosAPropiedades, CambiosDeEstados)(Counter);
const estadoInicial = {
    contador: 0
}

const reducer = (estado = estadoInicial, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...estado,
                contador: estado.contador + 1
            };
        case 'DECREMENT':
            return {
                ...estado,
                contador: estado.contador - 1
            };
        case 'ADD 5':
            return {
                ...estado,
                contador: estado.contador + 5
            };
        case 'SUBSTRACT 5':
            return {
                ...estado,
                contador: estado.contador - 5
            };
        default:
            return estado;
    }
};

export default reducer;
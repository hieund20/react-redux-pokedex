const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ''
}

// const test = {
//     pikachu: { abilities: [] },
//     balbasour: { abilities: [] }
// }

const PokemonMultipleReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case 'POKEMON_MULTIPLE_LOADING':
            return {
                ...state,
                loading: true,
                errorMsg: ''
            }
        case 'POKEMON_MULTIPLE_FAIL':
            return {
                ...state,
                loading: false,
                errorMsg: 'Unable to find pokemon'
            }
        case 'POKEMON_MULTIPLE_SUCCESS':
            return {
                ...state,
                loading: false,
                errorMsg: '',
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                }
            }
        default:
            return state
    }
}

export default PokemonMultipleReducer
import React from 'react'


class PokemonDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }

     render() {
         
         return (
            <h1>test</h1>
         )
     }
}

export default PokemonDetail;
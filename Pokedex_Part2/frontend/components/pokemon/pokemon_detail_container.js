import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { fetchSinglePokemon } from '../../util/api_util';
import PokemonDetail from './pokemon_index';

const mapStateToProps = (state, ownProps) => {

    const items = state.entities.items.filter(item=>{
        return item.pokemonId === ownProps.match.params.id
    })

    return{
   poke: state.entities.pokemon[ownProps.match.params.id],
   items: items
   }
}

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (pokeId)=>dispatch(requestSinglePokemon(pokeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
import SinglePokemon from "./SinglePokemon";

const PokemonList = ({ data, setDetailsId }) => {
	return (
		<div className="pokemon-list">
			{data.map((pokemon, i) => (
				<SinglePokemon key={i} pokemon={pokemon} setDetailsId={setDetailsId} />
			))}
		</div>
	);
};

export default PokemonList;

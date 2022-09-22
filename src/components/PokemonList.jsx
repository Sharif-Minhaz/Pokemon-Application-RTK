import SinglePokemon from "./SinglePokemon";

const PokemonList = ({ data }) => {
	return (
		<div className="pokemon-list">
			{data.map((pokemon, i) => (
				<SinglePokemon key={i} pokemon={pokemon} id={i + 1} />
			))}
		</div>
	);
};

export default PokemonList;

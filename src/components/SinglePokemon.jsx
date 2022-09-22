const SinglePokemon = ({ pokemon, id }) => {
	return (
		<div>
			<p>
				{id} {pokemon.name}
			</p>
		</div>
	);
};

export default SinglePokemon;

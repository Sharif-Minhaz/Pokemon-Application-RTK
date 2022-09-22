import { useGetMoreDetailsQuery } from "../services/pokemon/pokemonSlice";

const SinglePokemon = ({ pokemon, id, setDetailsId }) => {
	const moreInfo = useGetMoreDetailsQuery(id.toString());

	return (
		<div onClick={() => setDetailsId(id.toString())} className="single-pokemon">
			<img src={moreInfo.data?.sprites?.front_default} alt="indicator-img" />
			<p>{pokemon.name}</p>
		</div>
	);
};

export default SinglePokemon;

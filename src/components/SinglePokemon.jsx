import { useGetMoreDetailsQuery } from "../services/pokemon/pokemonSlice";

const SinglePokemon = ({ pokemon, setDetailsId }) => {
	const moreInfo = useGetMoreDetailsQuery(pokemon.name);

	return (
		<div
			onClick={() => {
				setDetailsId(pokemon.name);
				window.innerWidth <= 500 &&
					window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			}}
			className="single-pokemon"
		>
			<img
				src={
					moreInfo.data?.sprites?.front_default ||
					moreInfo.data?.sprites?.other?.["official-artwork"]?.front_default ||
					moreInfo?.data?.sprites?.front_default
				}
				alt="indicator-img"
				loading="lazy"
			/>
			<p>{pokemon.name}</p>
		</div>
	);
};

export default SinglePokemon;

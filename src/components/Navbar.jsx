import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetSinglePokemonQuery } from "../services/pokemon/pokemonSlice";

const Navbar = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [searchText, setSearchText] = useState("");
	const singlePokemonInfo = useGetSinglePokemonQuery(searchText.toLowerCase());

	useEffect(() => {
		singlePokemonInfo.isSuccess &&
			searchText.length !== 0 &&
			navigate(`/single/${searchText.toLowerCase()}`, {
				state: { data: singlePokemonInfo.data, keyword: searchText },
			});

		singlePokemonInfo.isError &&
			navigate(`/single/${searchText.toLowerCase()}`, {
				state: { data: [], keyword: searchText },
			});
		// eslint-disable-next-line
	}, [searchText, singlePokemonInfo]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchText(name);
		singlePokemonInfo.isSuccess &&
			searchText.length !== 0 &&
			navigate(`/single/${searchText.toLowerCase()}`, {
				state: { data: singlePokemonInfo.data, keyword: searchText },
			});
	};

	return (
		<nav>
			<Link to="/">
				<img
					className="brand-img"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
					alt="pokeApi"
				/>
			</Link>
			<form className="search-box" onSubmit={handleSubmit}>
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Find a Pokemon..."
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<input type="submit" value="Search" />
			</form>
		</nav>
	);
};

export default Navbar;

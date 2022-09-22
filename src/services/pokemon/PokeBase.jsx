import Navbar from "../../components/Navbar";
import PokemonList from "../../components/PokemonList";
import SideView from "../../components/SideView";
import Pagination from "./../../components/Pagination";

const PokeBase = () => {
	return (
		<>
			<Navbar />
			<div className="row">
				<div className="column-6">
					<PokemonList />
					<Pagination />
				</div>
				<div className="column-6">
					<SideView />
				</div>
			</div>
		</>
	);
};

export default PokeBase;

import { useEffect, useState } from "react";
import PokemonList from "../../components/PokemonList";
import SideView from "../../components/SideView";
import Pagination from "../../components/Pagination";
import { useGetAllPokemonQuery, useGetMoreDetailsQuery } from "./pokemonSlice";

const PokeBase = () => {
	const responseInfo = useGetAllPokemonQuery();
	const [data, setData] = useState([]);
	const [detailsId, setDetailsId] = useState("1");
	
	const moreDetails = useGetMoreDetailsQuery(detailsId);

	useEffect(() => {
		responseInfo.isSuccess && setData(responseInfo.data?.results);
	}, [responseInfo, data]);

	if (responseInfo.isLoading) return <h3>Loading...</h3>;
	if (responseInfo.isError) return <h2>An error occurred, {responseInfo.error.error}</h2>;

	return (
		<div className="row">
			<div className="column-6">
				<PokemonList data={data} setDetailsId={setDetailsId} />
				<Pagination />
			</div>
			<div className="column-6 content-view">
				<SideView moreDetails={moreDetails} />
			</div>
		</div>
	);
};

export default PokeBase;

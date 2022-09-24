import { useEffect, useState } from "react";
import PokemonList from "../../components/PokemonList";
import SideView from "../../components/SideView";
import Pagination from "../../components/Pagination";
import {
	useGetAllPokemonQuery,
	useGetMoreDetailsQuery,
	useGetRangeDataQuery,
} from "./pokemonSlice";
import Loading from "../../components/Loading";

const PokeBase = () => {
	const responseInfo = useGetAllPokemonQuery();

	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [detailsId, setDetailsId] = useState("bulbasaur");

	const moreDetails = useGetMoreDetailsQuery(detailsId);
	const nextPrevData = useGetRangeDataQuery(offset);

	useEffect(() => {
		responseInfo.isSuccess && setData(responseInfo.data?.results);
		setIsLoading(responseInfo.isLoading);
	}, [responseInfo]);

	useEffect(() => {
		nextPrevData.isSuccess && setData(nextPrevData.data?.results);
		setIsLoading(nextPrevData.isLoading);
	}, [nextPrevData, offset]);

	const handlePrevious = () => {
		setIsLoading(true);
		setOffset((prev) => offset >= 20 && prev - 20);
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const handleNext = () => {
		setIsLoading(true);
		setOffset((prev) => offset + 20 <= responseInfo.currentData?.count && prev + 20);
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	if (responseInfo.isError) return <h2>An error occurred, {responseInfo.error.error}</h2>;

	return (
		<div className="row">
			<div className="column-6 button-view">
				{isLoading ? <Loading /> : <PokemonList data={data} setDetailsId={setDetailsId} />}
				<Pagination
					handleNext={handleNext}
					handlePrevious={handlePrevious}
					offset={offset}
					count={responseInfo.data}
				/>
			</div>
			<div className="column-6 content-view">
				<SideView moreDetails={moreDetails} />
			</div>
		</div>
	);
};

export default PokeBase;

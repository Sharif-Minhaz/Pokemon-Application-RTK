import { Routes, Route } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import SearchView from "../components/SearchView";
import PokeBase from "../services/pokemon/PokeBase";
const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<PokeBase />} />
			<Route path="/single/:name" element={<SearchView />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default Routers;

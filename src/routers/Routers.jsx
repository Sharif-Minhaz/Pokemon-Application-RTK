import { Routes, Route } from "react-router-dom";
import DetailedView from "../components/DetailedView";
import ErrorPage from "../components/ErrorPage";
import PokeBase from "../services/pokemon/PokeBase";
const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<PokeBase />} />
			<Route path="/single/:id" element={<DetailedView />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default Routers;

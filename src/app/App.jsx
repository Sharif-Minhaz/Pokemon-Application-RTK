import { BrowserRouter } from "react-router-dom";
import Routers from "../routers/Routers";
import Navbar from "../components/Navbar";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routers />
		</BrowserRouter>
	);
};

export default App;

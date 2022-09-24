import { BrowserRouter } from "react-router-dom";
import Routers from "../routers/Routers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routers />
			<Footer />
		</BrowserRouter>
	);
};

export default App;

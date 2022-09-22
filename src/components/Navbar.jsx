import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<Link to="/">
				<img
					className="brand-img"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
					alt="pokeApi"
				/>
			</Link>
			<form>
				<input type="search" name="search" id="search" placeholder="Find Pokemon" />
				<input type="submit" value="Search" />
			</form>
		</nav>
	);
};

export default Navbar;

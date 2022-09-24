import defaultImg from "../assets/images/default.png";
import { useLocation, useNavigate } from "react-router-dom";

const SearchView = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	return (
		<section className="search-section">
			<p className="search-result-text">Search result of "{state.keyword}"</p>
			{state.data?.length === 0 ? (
				<div className="not-found-case">
					<p className="no-data">No data found. Type the name correctly!</p>
					<button onClick={() => navigate("/")}>Go Back to Home</button>
				</div>
			) : (
				<div className="search-view">
					<div className="search-img">
						<img
							src={
								state.data?.sprites?.other?.dream_world?.front_default ||
								state.data?.sprites?.other?.["official-artwork"]?.front_default ||
								state.data?.sprites?.back_default ||
								defaultImg
							}
							loading="lazy"
							alt="broken_img"
						/>
					</div>
					<div className="result-info">
						<table border={1}>
							<thead>
								<tr>
									<th>Category</th>
									<th>Information</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>Name</th>
									<td className="name">{state.data?.name}</td>
								</tr>
								<tr>
									<th>Species</th>
									<td>{state.data?.species?.name}</td>
								</tr>
								<tr>
									<th>Types</th>
									<td>
										{state.data?.types?.map((singleType, i) => (
											<span
												key={i}
												className={
													"poke-types " + singleType.type?.name
												}
											>
												{singleType.type?.name}
											</span>
										))}
									</td>
								</tr>
								<tr>
									<th>Abilities</th>
									<td>
										{state.data?.abilities
											?.map((singleAbility) => singleAbility.ability?.name)
											.join(", ")}
									</td>
								</tr>
								<tr>
									<th>Moves</th>
									<td>
										{state.data?.moves
											?.map((singleMove) => singleMove.move?.name)
											.slice(0, 5)
											.join(", ") || "Unknown"}
									</td>
								</tr>
								<tr>
									<th>Height</th>
									<td>{Number(state.data?.height) / 10}m</td>
								</tr>
								<tr>
									<th>Weight</th>
									<td>{Number(state.data?.weight) / 10}kg</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}
		</section>
	);
};

export default SearchView;

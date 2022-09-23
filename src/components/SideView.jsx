const SideView = ({ moreDetails }) => {	
	return (
		<div className="more-details">
			<img
				src={moreDetails.data?.sprites?.other?.dream_world?.front_default}
				alt="pokemon_img"
				loading="lazy"
			/>
			<div>
				<p className="name">
					<strong>Name:</strong> <span>{moreDetails.data?.name}</span>
				</p>
				<p>
					<strong>Species:</strong> {moreDetails.data?.species?.name}
				</p>
				<p>
					<strong>Types:</strong>{" "}
					{moreDetails.data?.types?.map((singleType) => singleType.type?.name).join(", ")}
				</p>
				<p>
					<strong>Abilities:</strong>{" "}
					{moreDetails.data?.abilities
						?.map((singleAbility) => singleAbility.ability?.name)
						.join(", ")}
				</p>
				<p>
					<strong>Moves:</strong>{" "}
					{moreDetails.data?.moves
						?.map((singleMove) => singleMove.move?.name)
						.slice(0, 3)
						.join(", ")}
				</p>
				<p>
					<strong>Height:</strong> {Number(moreDetails.data?.height) / 10}m{", "}
					<strong>Weight:</strong> {Number(moreDetails.data?.weight) / 10}kg
				</p>
			</div>
		</div>
	);
};

export default SideView;

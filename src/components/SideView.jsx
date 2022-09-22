const SideView = ({ moreDetails }) => {
	return (
		<div className="more-details">
			<img
				src={moreDetails.data?.sprites?.other?.dream_world?.front_default}
				alt="pokemon_img"
			/>
			<p className="name">
				<strong>Name:</strong> <span>{moreDetails.data?.name}</span>
			</p>
			<p>
				<strong>Base Experience:</strong> {moreDetails.data?.base_experience}
			</p>
			<p>
				<strong>Height:</strong> {Number(moreDetails.data?.height) / 10}m
			</p>
			<p>
				<strong>Weight:</strong> {Number(moreDetails.data?.weight) / 10}kg
			</p>
		</div>
	);
};

export default SideView;

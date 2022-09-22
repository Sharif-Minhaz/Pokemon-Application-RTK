const SideView = ({ moreDetails }) => {
	return (
		<div className="more-details">
			<img src={moreDetails.data?.sprites?.other?.dream_world?.front_default} alt="pokemon_img" />
			<p className="name">Name: {moreDetails.data?.name}</p>
			<p>Base Experience: {moreDetails.data?.base_experience}</p>
			<p>Height: {moreDetails.data?.height}</p>
			<p>Weight: {moreDetails.data?.weight}</p>
		</div>
	);
};

export default SideView;

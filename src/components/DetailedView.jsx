import SideView from "./SideView";

const DetailedView = ({ moreDetails }) => {

	return (
		<div className="search-result">
			<SideView moreDetails={moreDetails} />
		</div>
	);
};

export default DetailedView;

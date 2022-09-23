const Pagination = ({ handleNext, handlePrevious, offset }) => {
	return (
		<div className="pagination">
			<button onClick={handlePrevious} disabled={offset <= 0}>
				{"<"} Previous
			</button>
			<button onClick={handleNext}>Next {">"} </button>
		</div>
	);
};

export default Pagination;

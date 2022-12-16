import React from "react";

function Spinner() {
	return (
		<div
			className="container position-absolute d-flex justify-content-center align-items-center "
			style={{ top: 0, left: 0, right: 0, bottom: 0 }}
		>
			<>
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				<div className="spinner-border text-secondary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				<div className="spinner-border text-success" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				<div className="spinner-border text-danger" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				<div className="spinner-border text-warning" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				<div className="spinner-border text-info" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				<div className="spinner-border text-light" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</>
		</div>
	);
}

export default Spinner;

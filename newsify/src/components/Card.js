import React from "react";

function Card(props) {
	return (
		<div>
			<div
				className="card position-relative "
				// style={{
				// 	position: "relative",
				// 	display: "flex",
				// 	justifyContent: "center",
				// 	alignItems: "center",
				// 	zIndex: "0",
				// }}
			>
				<span
					className="position-absolute top-0  ml-auto badge badge-pill badge-danger"
					style={{ top: "10px", left: "0px", backgroundColor: "red" }}
					// style={{
					// 	position: "absolute",
					// 	zIndex: "1",
					// 	top: "0",
					// 	left: "0",
					// 	backgroundColor: "red",
					// }}
					// clasName="position-absolute top-0 left-0 badge rounded-pill z-index-1 bg-danger"
				>
					{props.channel}
				</span>
				<img
					src={
						props.urlToImage == null
							? "https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182295.jpg?w=2000"
							: props.urlToImage
					}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">
						{props.title == null ? "Title" : props.title}
					</h5>
					<p className="card-text fs-6 fw-light">
						{props.content == null ? "Content..." : props.content}
					</p>
					<p class="card-text d-flex justify-content-between">
						<small>
							<i>{new Date(props.time).toLocaleDateString()}</i>
						</small>
						<small class="text-muted">
							by-{props.author ? props.author : "Anonymous"}
						</small>
					</p>
					<a
						href={props.urlToNews == null ? "/" : props.urlToNews}
						target="_blank"
						className="btn btn-primary btn-sm"
					>
						read more ...
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;

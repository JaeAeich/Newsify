import React from "react";

function Card(props) {
	return (
		<div>
			<div
				className="card"
				style={{
					position: "relative",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<span
					style={{ position: "absolute", zIndex: "1" ,top:'0',left:'0'}}
					class="badge rounded-pill bg-danger"
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
					<p className="card-text">
						{props.content == null ? "Content..." : props.content}
					</p>
					<a
						href={props.urlToNews == null ? "/" : props.urlToNews}
						target="_blank"
						className="btn btn-primary"
					>
						read more ...
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;

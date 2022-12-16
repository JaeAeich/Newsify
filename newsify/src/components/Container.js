import { useState, useEffect } from "react";
import React from "react";
import Spinner from "./Spinner";
import Card from "./Card";

function Container(props) {
	const [data, setData] = useState(null);
	const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
	const [url, setUrl] = useState(
		`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=0f3c5ed1000247359045725ad78ea91e&page=${page}&pageSize=${pageSize}`
	);

	const handleNextClick = (event) => {
		event.preventDefault();
		const newPage = page + 1;
		setPage(newPage);
		setUrl(
			`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=0f3c5ed1000247359045725ad78ea91e&page=${page}&pageSize=${pageSize}`
		);
		fetchData();
		console.log(page);
	};
	const handlePrevClick = (event) => {
		event.preventDefault();
		if (page >= 1) {
			const newPage = page - 1;
			setPage(newPage);
			setUrl(
				`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=0f3c5ed1000247359045725ad78ea91e&page=${page}&pageSize=${pageSize}`
			);
			fetchData();
		}
	};

	const fetchData = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setData(data.articles);
	};

	useEffect(() => {
		fetchData();
	}, );

	return data == null ? (
		<Spinner />
	) : (
		<div className="container">
			{/* <h3 className="my-1">{props.category.toUpperCase()}</h3>
			<div class="dropdown">
				<button
					class="btn btn-secondary dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Dropdown button
				</button>
				<ul class="dropdown-menu">
					<li>
						5
					</li>
					<li>
						10
					</li>
					<li>
						50
					</li>
				</ul>
			</div> */}
			<div className="container">
				<div className="row my-3">
					{data.map((obj) => {
						return (
							<div
								className="col-md-4 my-1"
								value={obj.url}
								key={obj.urlToNews}
							>
								<Card
									title={obj.title}
									desc={obj.description}
									urlToNews={obj.url}
									urlToImage={obj.urlToImage}
									content={obj.content}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="container">
				<button
					disabled={page <= 1}
					type="button"
					onClick={handlePrevClick}
					class="btn btn-primary my-3 mx-5"
				>
					Prev
				</button>
				<button
					// disabled={Math.ceil(data.)}
					type="button"
					onClick={handleNextClick}
					class="btn btn-primary my-3 mx-5"
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Container;

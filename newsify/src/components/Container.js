import { useState, useEffect } from "react";
import React from "react";
import Spinner from "./Spinner";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";


function Container(props) {
	const [data, setData] = useState(null);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(9);
	const [totRes, setTotRes] = useState(null);
	const [url, setUrl] = useState(
		`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`
	);

	// const handleNextClick = (event) => {
	// 	event.preventDefault();
	// 	const newPage = page + 1;
	// 	setPage(newPage);
	// 	setUrl(
	// 		`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`
	// 	);
	// 	fetchData();
	// 	console.log(page);
	// };

	// const handlePrevClick = (event) => {
	// 	event.preventDefault();
	// 	if (page >= 1) {
	// 		const newPage = page - 1;
	// 		setPage(newPage);
	// 		setUrl(
	// 			`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`
	// 		);
	// 		fetchData();
	// 	}
	// };

	const fetchData = async () => {
		props.setProgress(0);
		const response = await fetch(url);
		const data = await response.json();
		setData(data.articles);
		setTotRes(data.totalResults);
		props.setProgress(100);
	};

	const fetchMoreData = async () => {
		props.setProgress(0);
		if (page * pageSize <= totRes) {
			setUrl(
				`https://newsapi.org/v2/top-headlines?country=us&category=${
					props.category
				}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${pageSize}`
			);
			const newPage = page + 1;
			setPage(newPage);
			const response = await fetch(url);
			
			let newData = await response.json();
			newData = newData.articles;
			setData([...data, ...newData]);
			props.setProgress(100);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return data == null ? (
		<Spinner />
	) : (
		<>
			<div className="container my-5">
				<InfiniteScroll
					dataLength={data.length}
					next={fetchMoreData}
					hasMore={data.length <= totRes}
					loader={page*pageSize<totRes?<h4>wait...</h4>:<h4>end of results</h4>}
				>
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
											channel={obj.source.name}
											author={obj.author}
											time={obj.publishedAt}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</InfiniteScroll>
			</div>
			{/* <div className="container">
				<button
					disabled={page <= 1}
					type="button"
					onClick={handlePrevClick}
					className="btn btn-primary my-3 mx-5"
				>
					Prev
				</button>
				<button
					// disabled={Math.ceil(data.)}
					type="button"
					onClick={handleNextClick}
					className="btn btn-primary my-3 mx-5"
				>
					Next
				</button>
			</div> */}
		</>
	);
}

export default Container;

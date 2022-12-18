import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
	const [input, setInput] = useState("");
	const [color, setColor] = useState("white");
	const blinkButton = useRef();

	const handleChange = () => {
		let val = this.target.value;
		setInput(val);
	};

	useEffect(() => {
		setInterval(() => {
			if (color === "white") {
				setColor("black");
			} else {
				setColor("white");
			}
			blinkButton.current.style.color = color;
		}, 1000);
	});

	const handleClick = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light sticky-top">
				<div className="container-fluid">
					<a className="navbar-brand mx-3" href="/">
						Newsify
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" to="/Sports">
									Sports
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Business">
									Business
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Entertainment">
									Entertainment
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/General">
									General
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Science">
									Science
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Sports">
									Sports
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Technology">
									Technology
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Health">
									Health
								</Link>
							</li>
							<li
								style={{ background: "steelblue", borderRadius: "20%" }}
								className="nav-item"
							>
								<Link
									ref={blinkButton}
									className="nav-link"
									to="/Credit"
									style={{ color: "white" }}
								>
									Credit
								</Link>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
								onChange={handleChange}
							/>
							<button
								className="btn btn-outline-success"
								onClick={handleClick}
								type="submit"
							>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;

import React, { useState } from "react";
// import {setSearch} from "./Container";


function Navbar() {
	const [input, setInput] = useState("");

	const handleChange =() =>{
		let val = this.target.value;
		setInput(val);
	}

	const handleClick = () =>{
		this.preventDefault();
		// setSearch(input);
	}
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light">
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
							{/* <li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li> */}
						</ul>
						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
								onChange={handleChange}
							/>
							<button className="btn btn-outline-success" onClick={handleClick} type="submit">
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

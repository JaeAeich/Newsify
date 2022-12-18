import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Notfound from './components/Notfound';
import LoadingBar from "react-top-loading-bar";
import Credit from "./components/Credit";
import { useState } from 'react';

function App() {

	const [progress, setProgress] = useState(0);
	// const apiKey=process.env.REACT_APP_API_KEY;
	const apiKey = "0f3c5ed1000247359045725ad78ea91e";
	return (
		<div className="App">
			<BrowserRouter>
				<LoadingBar
					color="steelblue"
					progress={progress}
					onLoaderFinished={() => setProgress(0)}
				/>
				<Navbar />
				<Routes>
					<Route
						path="/Sports"
						element={
							<Container
								setProgress={setProgress}
								apiKey={apiKey}
								key="sports"
								category="sports"
							/>
						}
					/>
					<Route
						path="/Business"
						element={
							<Container
								setProgress={setProgress}
								apiKey={apiKey}
								key="business"
								category="business"
							/>
						}
					/>
					<Route
						path="/Entertainment"
						element={
							<Container
								setProgress={setProgress}
								apiKey={apiKey}
								key="entertainment"
								category="entertainment"
							/>
						}
					/>
					<Route
						path="/General"
						element={
							<Container
								setProgress={setProgress}
								apiKey={apiKey}
								key="general"
								category="general"
							/>
						}
					/>
					<Route
						path="/Health"
						element={
							<Container
								setProgress={setProgress}
								apiKey={apiKey}
								key="health"
								category="health"
							/>
						}
					/>
					<Route
						path="/Science"
						element={
							<Container
								setProgress={setProgress}
								apiKey={apiKey}
								key="science"
								category="science"
							/>
						}
					/>
					<Route
						path="/Sports"
						element={
							<Container
								setProgress={setProgress}
								apiKey={apiKey}
								key="sports"
								category="sports"
							/>
						}
					/>
					<Route
						path="/Technology"
						element={
							<Container
								setProgress={setProgress}
								apiKey={apiKey}
								key="technology"
								category="technology"
							/>
						}
					/>
					<Route
						path="/"
						element={
							<Container
								setProgress={setProgress}
								apiKey={apiKey}
								key="*"
								category="sports"
							/>
						}
					/>
					<Route path="/Credit" element={<Credit key="about" />} />
					<Route path="*" element={<Notfound key="*" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

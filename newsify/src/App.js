import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from './components/Notfound';

function App() {
	return (
		<div className="App">
			{/* <Container category="health" /> */}
			{/* <BrowserRouter>
				<Navbar />
				<Routes>
					<Route  path="/home" component={<Container category="business" />} />
				</Routes>
			</BrowserRouter> */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/Sports"
						element={<Container key="sports" category="sports" />}
					/>
					<Route
						path="/Business"
						element={<Container key="business" category="business" />}
					/>
					<Route
						path="/Entertainment"
						element={<Container key="entertainment" category="entertainment" />}
					/>
					<Route
						path="/General"
						element={<Container key="general" category="general" />}
					/>
					<Route
						path="/Health"
						element={<Container key="health" category="health" />}
					/>
					<Route
						path="/Science"
						element={<Container key="science" category="science" />}
					/>
					<Route
						path="/Sports"
						element={<Container key="sports" category="sports" />}
					/>
					<Route
						path="/Technology"
						element={<Container key="technology" category="technology" />}
					/>
					<Route path="/" element={<Container key="*" category="sports" />} />
					<Route path="*" element={<Notfound key="*" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

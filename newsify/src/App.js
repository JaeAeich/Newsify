import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from './components/Notfound';

function App() {
  // const apiKey=process.env.REACT_APP_API_KEY;
  const apiKey = "5dc52e0ee1934eb18cb9dfd51b042e20";
	return (
		<div className="App">
			{/* <Container apiKey={apiKey} category="health" /> */}
			{/* <BrowserRouter>
				<Navbar />
				<Routes>
					<Route  path="/home" component={<Container apiKey={apiKey} category="business" />} />
				</Routes>
			</BrowserRouter> */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/Sports"
						element={<Container apiKey={apiKey} key="sports" category="sports" />}
					/>
					<Route
						path="/Business"
						element={<Container apiKey={apiKey} key="business" category="business" />}
					/>
					<Route
						path="/Entertainment"
						element={<Container apiKey={apiKey} key="entertainment" category="entertainment" />}
					/>
					<Route
						path="/General"
						element={<Container apiKey={apiKey} key="general" category="general" />}
					/>
					<Route
						path="/Health"
						element={<Container apiKey={apiKey} key="health" category="health" />}
					/>
					<Route
						path="/Science"
						element={<Container apiKey={apiKey} key="science" category="science" />}
					/>
					<Route
						path="/Sports"
						element={<Container apiKey={apiKey} key="sports" category="sports" />}
					/>
					<Route
						path="/Technology"
						element={<Container apiKey={apiKey} key="technology" category="technology" />}
					/>
					<Route path="/" element={<Container apiKey={apiKey} key="*" category="sports" />} />
					<Route path="*" element={<Notfound key="*" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

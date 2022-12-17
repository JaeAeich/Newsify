import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from './components/Notfound';
import Credit from './components/Credit';

function App() {
  // const apiKey=process.env.REACT_APP_API_KEY;
  const apiKey = "9cdca13a292c4f4d805aa490efc188a5";
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
					<Route path="/Credit" element={<Credit key="about" />} />
					<Route path="*" element={<Notfound key="*" />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

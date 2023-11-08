import { useEffect } from 'react';
import Gallery from './components/Gallery';
import SortBar from './components/SortBar';
import './styles/app.scss';

const App = () => {
	useEffect(() => {
		console.log('Elecard CW Challenge');
	}, []);

	return (
		<div className="app">
			<header className="header">
				<SortBar />
			</header>

			<main className="main">
				<Gallery />
			</main>

			<footer className="footer">footer</footer>
		</div>
	);
};

export default App;

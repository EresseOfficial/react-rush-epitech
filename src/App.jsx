import '@sass/content/home/home.scss';
import './App.css';

// Loading spinner
// import './components/LoadSpinner/LoadSpinner.css';
// import './components/LoadSpinner/LoadSpinner';

// Search bar
import './components/SearchBar/SearchBar.css';

// Menu
import './components/Menu/Menu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import FilterData from "./components/FilterData/FilterData";
// Display Articles
// import Home from '@component/Home';
import _ from 'lodash';
import React, { useState } from 'react';
//
import ArticleList from './components/ArticleList/ArticleList';
// import OrderButton from './components/OrderButton/OrderButton';
// import SearchBar from './components/SearchBar/SearchBar';
import Home from './components/Home';

function App() {
	_.orderBy();
	const [articles, setArticles] = React.useState([]);
	const [selectedTag, setSelectedTag] = useState('');
	function api() {
		fetch(`https://dev.to/api/articles?tag=${selectedTag}`)
			.then((res) => res.json())
			.then((res) => {
				setArticles(res);
			});
	}
	React.useEffect(() => {
		api();
	}, [selectedTag]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							articles={articles}
							setArticles={setArticles}
							selectedTag={selectedTag}
							setSelectedTag={setSelectedTag}
						/>
					}
				/>
				<Route
					path="/myList"
					element={
						<ArticleList articles={articles} setArticles={setArticles} />
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

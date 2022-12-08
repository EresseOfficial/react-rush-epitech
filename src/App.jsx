import '@sass/content/home/home.scss';
import './App.css';

// Loading spinner
import './components/LoadSpinner/LoadSpinner.css';
import './components/LoadSpinner/LoadSpinner';

// Search bar
import './components/SearchBar/SearchBar.css';

// Display Articles
import Home from '@component/Home';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchBar from './components/SearchBar/SearchBar';
import ArticleList from './components/ArticleList/ArticleList';
import FilterData from "./components/FilterData/FilterData";

function App() {
	// fetching dev.to API
	const [articles, setArticles] = React.useState([]);
	const [selectedTag, setSelectedTag] = useState('');
	function API() {
		fetch(`https://dev.to/api/articles?tag=${selectedTag}`)
			.then((res) => res.json())
			.then((res) => {
				setArticles(res);
			});
	}
	React.useEffect(() => {
		API();
	}, []);

	// displaying articles into console
	console.log(articles);
	console.log(selectedTag);

	// displaying articles in homepage
	return (
		<div className="App">
			<SearchBar
				articles={articles}
				selectedTag={selectedTag}
				setSelectedTag={setSelectedTag}
				api={API}
			/>
			<ArticleList articles={articles} />
		</div>
	);
}

export default App;

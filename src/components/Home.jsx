import '@sass/content/home/home.scss';

import React from 'react';

import SearchBar from './SearchBar/SearchBar';
import OrderButton from './OrderButton/OrderButton';
import ArticleList from './ArticleList/ArticleList';
import Menu from './Menu/Menu';

function Home({ articles, setArticles, selectedTag, setSelectedTag }) {
	return (
		<div className="App">
			<Menu />
			<SearchBar
				articles={articles}
				selectedTag={selectedTag}
				setSelectedTag={setSelectedTag}
			/>
			<OrderButton articles={articles} setArticles={setArticles} />
			<ArticleList articles={articles} />
		</div>
	);
}

export default Home;

import React, { useState } from 'react';

import app from '../../App';
import ArticleList from '../ArticleList/ArticleList';

const SearchBar = ({ articles, selectedTag, setSelectedTag, api }) => {
	// const handleChange = (e) => {
	// 	e.preventDefault();
	// 	setSearchInput(e.target.value);
	// };
	//
	// if (SearchInput.length > 0) {
	// 	articles.filter((article) => {
	// 		console.log(article);
	// 		return article.tags.match(SearchInput);
	// 	});
	// }

	function handleSubmit(event) {
		event.preventDefault();
		api();
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search here"
					onChange={(event) => setSelectedTag(event.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default SearchBar;
// {ArticleList.filter((val) => {
// 	if (SearchInput == ""){
// 		return val
// 	} else if (val.tag.toLowerCase().includes(searchInput.toLowerCase())) {
// 		return val
// 	}
// );
// }).map((val, key))}
// };

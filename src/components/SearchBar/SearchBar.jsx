import React from 'react';

// import '../Home';

const SearchBar = ({ setSelectedTag }) => {
	function handleSubmit(event) {
		event.preventDefault();
		setSelectedTag(event.target.value);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Search here" />
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

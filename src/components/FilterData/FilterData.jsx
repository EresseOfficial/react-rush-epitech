import React, { useEffect, useState } from 'react';

import ArticleList from '../ArticleList/ArticleList';

const Tag = ({ articles }) => {
	React.useEffect(() => {
		selectedTag(articles.filter(tags));
	});

	return <input />;
};

export default Tag;

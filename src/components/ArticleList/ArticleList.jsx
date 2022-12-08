import React from 'react';

function ArticleList({ articles }) {
	return (
		<div className="articles">
			{articles.map((article) => {
				return (
					<div key={article.id} className="article">
						<a href={article.url} className="title">
							{article.title}
						</a>
						<img src={article.social_image} alt={article.title} />
						<p>
							{article.description} <a href={article.url}>Read More.</a>
						</p>
						<p>
							{article.readable_publish_date} | {article.tags}{' '}
						</p>
						<p> {article.public_reactions_count} reactions</p>
					</div>
				);
			})}
		</div>
	);
}

export default ArticleList;

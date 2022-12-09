import _ from 'lodash';
import React, { useEffect, useState } from 'react';

function OrderButton({ articles, setArticles }) {
	const [OrderDate, setOrderDate] = useState('asc');
	function OrderClick() {
		// if (OrderDate === 'desc') {
		// 	setOrderDate('asc');
		// } else {
		// 	setOrderDate('desc');
		// }
		if (OrderDate === 'desc') {
			setArticles(_.orderBy(articles, ['published_at'], ['asc']));
			setOrderDate('asc');
		} else {
			setArticles(_.orderBy(articles, ['published_at'], ['desc']));
			setOrderDate('desc');
		}
		console.log(OrderDate);
	}

	return (
		<button type="button" onClick={OrderClick}>
			Order by
		</button>
	);
}

export default OrderButton;

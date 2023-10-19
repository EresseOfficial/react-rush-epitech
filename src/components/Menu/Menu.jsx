import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Menu = () => {
	const Location = useLocation();
	return (
		<nav>
			<ul>
				<li>
					<NavLink
						to="/myList"
						className={Location.pathname === '/myList' ? 'selected' : ''}>
						My List
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;

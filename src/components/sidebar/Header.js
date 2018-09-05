import React, { Component } from 'react';

import Intro from './Intro';
import Nav from './Nav';
import Footer from './Footer';

class Header extends Component {
	render() {
		return (
			<header id="header">
				<Intro />
				<Nav />
				<Footer />
			</header>
		);
	}
}

export default Header;
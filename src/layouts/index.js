import React, { Component } from 'react';
import Helmet from 'react-helmet';

import '../assets/scss/main.scss';

import favicon from '../../static/favicon.ico';
import Header from '../components/sidebar/Header';

class Template extends Component {
	constructor(props) {
    super(props);
	}

	render() {
		const { children } = this.props;

		return (
			<div>
				<Helmet
					title="Rachel Opperman | Software Engineer"
					meta={[
						{ name: 'description', content: ""}
					]}
					link={[
						{ rel: 'icon', type: 'image/png', href: `${favicon}`}
					]}
				/>
				<Header />
				{children()}
			</div>
		);
	}
}

Template.propTypes = {
	children: React.PropTypes.func
};

export default Template;
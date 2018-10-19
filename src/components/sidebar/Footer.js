import React, { Component } from 'react';
import Link from 'gatsby-link';

class Footer extends Component {
	render() {
		return (
			<div id="footer">
				<div className="inner">
					<ul className="icons">
						<li>
							<a
								href="https://github.com/movntains"
								target="_blank"
								className="icon fa-github"
							>
								<span className="label">Github</span>
							</a>
						</li>
						<li>
							<a
								href="https://codepen.io/movntains/"
								target="_blank"
								className="icon fa-codepen"
							>
								<span className="label">CodePen</span>
							</a>
						</li>
						<li>
							<a
								href="https://medium.com/@movntains"
								target="_blank"
								className="icon fa-medium"
							>
								<span className="label">Medium</span>
							</a>
						</li>
						<li>
							<Link to="/contact" className="icon fa-envelope-o">
								<span className="label">Contact</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Footer;
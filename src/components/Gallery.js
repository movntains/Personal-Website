import React, { Component } from 'react';
import Link from 'gatsby-link';

class Gallery extends Component {
	constructor() {
		super();
	}

	renderGallery() {
		const { images } = this.props;

		if (!images) {
			return;
		}

		const gallery = images.map((obj, i) => {
			return (
				<div className="6u 12u$(xsmall) work-item" key={i}>
					<Link
						className="image fit thumb"
						to={obj.src}
					>
						<img src={obj.thumbnail} />
					</Link>

					<h3>{obj.caption}</h3>
					<p>{obj.description}</p>
				</div>
			);
		});

		return (
			<div className="row">
				{gallery}
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.renderGallery()}
			</div>
		);
	}
}

export default Gallery;
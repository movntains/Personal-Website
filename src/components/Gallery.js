import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

class Gallery extends Component {
  renderGallery() {
    const { images } = this.props;

    if (!images) {
      return;
    }

    const gallery = images.map(obj => (
      <div className="6u 12u$(xsmall) work-item" key={obj.id}>
        <Link className="image fit thumb" to={obj.src}>
          <img src={obj.thumbnail} alt="Project" />
        </Link>

        <h3>{obj.caption}</h3>
        <p>{obj.description}</p>
      </div>
    ));

    return <div className="row">{gallery}</div>;
  }

  render() {
    return <div>{this.renderGallery()}</div>;
  }
}

Gallery.propTypes = {
  images: PropTypes.array
};

export default Gallery;

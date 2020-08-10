import React from 'react';
import PropTypes from 'prop-types';
import './Title.css'

function Title({ titleText }) {

  return (
    <div className="title">
      {titleText}
    </div>
  );
}

Title.displayName = 'Title';

Title.propTypes = {
  titleText: PropTypes.string,
};

export default Title;

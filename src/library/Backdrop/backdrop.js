/**
 * Libraries
 */

import React from 'react';

import PropTypes from 'prop-types';

/**
 * Styles
 */

import './backdrop.scss';

/**
 * Button component definition and export
 */

const Backdrop = (props) => (
    props.show ? <div onClick={props.onClick} className = "backdrop"/> : null
);

export default Backdrop;

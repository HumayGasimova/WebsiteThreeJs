/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './spinner.scss';

/**
 * spinner component definition and export
 */

const spinner = () => (
        <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
        </div>
);

export default spinner;
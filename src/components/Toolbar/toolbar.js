/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './toolbar.scss';

/**
* Toolbar component definition and export
*/

export const Toolbar = (props) => {
    return(
        <header className="toolbar">
            <div>Menu</div>
            <div>Logo</div>
            <nav>
                ...
            </nav>
        </header>
    );
}

export default Toolbar;

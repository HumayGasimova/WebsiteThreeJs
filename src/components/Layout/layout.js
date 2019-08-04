/**
 * Libraries
 */

import React from 'react';

/**
 * Styles
 */

import './layout.scss';

/**
 * Layout component definition and export
 */

export const Layout = (props) => {
    return(
        <div className="layout">
            <h1>Toolbarm, SideDrawer, Backdrop</h1>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;


/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

/**
* Styles
*/

import './toolbarItem.scss';

/**
* ToolbarIcon component definition and export
*/

export const ToolbarItem = (props) => {

    /**
    * State
    */


    /**
    * Methods
    */


    /**
    * Markup
    */

    return(
        <div className="toolbar-item">
            {props.text}
        </div>
    );
}

export default ToolbarItem;
 
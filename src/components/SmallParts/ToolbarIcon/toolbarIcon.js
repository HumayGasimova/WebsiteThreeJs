/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    Route
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/


/**
* Styles
*/

import './toolbarIcon.scss';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
* Home component definition and export
*/

export const ToolbarIcon = (props) => {
    const iconRef = React.createRef();
    const [width, setWidth] = useState(0)

    /**
    * Methods
    */

    useEffect(()=>{
        setWidth(iconRef.current.clientWidth);
    },[])

    /**
    * Markup
    */

    return(
        <div className="toolbarIcon">
            <div className="toolbarIcon-element" ref={iconRef}>
                {props.text}
                <div className="toolbarIcon-line">
                    <div 
                        className="toolbarIcon-line-left-part" 
                        style={{width: `${width/2 - 6}`}}
                    />
                    <div 
                        className="toolbarIcon-line-right-part" 
                        style={{width: `${width/2 - 6}`}}
                    />
                </div>
            </div>
            
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // zoom: Selectors.getZoomState(state),
        };
    },
    (dispatch) => {
        return {
            // startZooming: bindActionCreators(Actions.startZooming, dispatch),
        };
    }
)(ToolbarIcon);
 
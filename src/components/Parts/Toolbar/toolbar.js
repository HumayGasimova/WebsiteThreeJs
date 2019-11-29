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

import ToolbarIcon from '../../SmallParts/ToolbarIcon/toolbarIcon';

/**
* Styles
*/

import './toolbar.scss';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
* Home component definition and export
*/

export const Toolbar = () => {

    const size = useWindowSize();
    const [scrollTop, setScrollTop] = useState(0);

    /**
    * Methods
    */

   useEffect(()=>{
        addEventListener('scroll', ()=> {
            let scrollHeight = document.body.scrollTop;
            setScrollTop(scrollHeight);
        })
    },[])

    /**
    * Markup
    */

    return(
        <div className={scrollTop >= 100 ? "toolbar-scroll" : "toolbar"} style={{width: `${size.width-97}px`}}>
            <ToolbarIcon 
                text={"Home"}
                scrollTop={scrollTop}
            />
            <ToolbarIcon 
                text={"Services"}
                scrollTop={scrollTop}
            />
            <ToolbarIcon 
                text={"About"}
                scrollTop={scrollTop}
            />
            <ToolbarIcon 
                text={"Gallery"}
                scrollTop={scrollTop}
            />
            <ToolbarIcon 
                text={"Contact"}
                scrollTop={scrollTop}
            />
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
)(Toolbar);
 
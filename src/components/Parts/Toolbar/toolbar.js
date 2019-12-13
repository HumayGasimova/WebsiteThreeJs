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
* Actions
*/

import * as Actions from '../../../actions';

/**
* Styles
*/

import './toolbar.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors'

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

/**
* Toolbar component definition and export
*/

export const Toolbar = (props) => {

    const size = useWindowSize();
    const [scrollTop, setScrollTop] = useState(0);
    const [toolBarInit, setToolBarInit] = useState(false);

    /**
    * Methods
    */

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        setScrollTop(scrollHeight);
        setToolBarInit(true);
    }

    useEffect(()=>{
        addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    /**
    * Markup
    */

    return(
        <div className={scrollTop > 0 && toolBarInit ? "toolbar-scroll-down" : (scrollTop === 0 && toolBarInit ? "toolbar-scroll-up" : "toolbar")} style={{width: `${size.width-95}px`}}>
            <ToolbarIcon 
                text={"Home"}
                scrollTop={scrollTop}
                toolBarInit={toolBarInit}
                id="home"
            />
            <ToolbarIcon 
                text={"Services"}
                scrollTop={scrollTop}
                toolBarInit={toolBarInit}
                id="services"
            />
            <ToolbarIcon 
                text={"About"}
                scrollTop={scrollTop}
                toolBarInit={toolBarInit}
                id="about"
            />
            <ToolbarIcon 
                text={"Gallery"}
                scrollTop={scrollTop}
                toolBarInit={toolBarInit}
                id="gallery"
            />
            <ToolbarIcon 
                text={"Contact"}
                scrollTop={scrollTop}
                toolBarInit={toolBarInit}
                id="contact"
            />
            <div 
                className="toolbar-min" 
                onClick={() => props.toggleMenuButton()}
            >
                <div className={props.menuButtonIsPressed ? "toolbar-min-line1-effect" : "toolbar-min-line1"}/>
                <div className={props.menuButtonIsPressed ? "toolbar-min-line2-effect" : "toolbar-min-line2"}/>
                <div className={props.menuButtonIsPressed ? "toolbar-min-line3-effect" : "toolbar-min-line3"}/>
            </div>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(Toolbar);
 
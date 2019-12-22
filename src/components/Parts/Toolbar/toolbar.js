/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

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

import * as Selectors from '../../../reducers/selectors';

/**
* Hooks
*/

import {
    useWindowSize
} from '../../../Hooks/useWindowSize';

import {
    toolabarItems
} from '../../../constants/toolbarItems';

/**
* Toolbar component definition and export
*/

export const Toolbar = (props) => {

    /**
    * State
    */

    const size = useWindowSize();
    const [scrollTop, setScrollTop] = useState(0);
    const [toolBarInit, setToolBarInit] = useState(false);

    /**
    * Methods
    */

    const renderToolbarItems = () => {
        return(
            <>{toolabarItems.map((el) => {
                return(
                    <ToolbarIcon 
                        key={el.id}
                        text={el.text}
                        scrollTop={scrollTop}
                        toolBarInit={toolBarInit}
                        id={el.itemId}
                        active={el.itemId === props.activatedIcon}
                    />
                )
            })}</>
        )
    }

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        setScrollTop(scrollHeight);
        setToolBarInit(true);
    }

    useEffect(()=>{
        addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /**
    * Markup
    */

    return(
        <div className={scrollTop > 0 && toolBarInit ? "toolbar-scroll-down" : (scrollTop === 0 && toolBarInit ? "toolbar-scroll-up" : "toolbar")} style={{width: `${size.width-95}px`}}>
            {renderToolbarItems()}
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
            activatedIcon: Selectors.getActivatedIconState(state),
        };
    },
    (dispatch) => {
        return {
            toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(Toolbar);
 
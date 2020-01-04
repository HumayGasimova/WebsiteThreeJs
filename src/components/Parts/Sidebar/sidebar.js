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

import { 
    CSSTransition 
} from 'react-transition-group';

/**
* Components
*/

import ToolbarItem from '../../SmallParts/ToolbarItem/toolbarItem';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Styles
*/

import './sidebar.scss';

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
* Sidebar component definition and export
*/

export const Sidebar = (props) => {

    /**
    * State
    */

    const size = useWindowSize();

    /**
    * Methods
    */

    const renderToolbarItems = () => {
        return(
            <>{toolabarItems.map((el) => {
                return(
                    <ToolbarItem 
                        key={el.id}
                        text={el.text}
                        className="sidebar-item"
                        // toolBarInit={toolBarInit}
                        // id={el.itemId}
                        // active={el.itemId === props.activatedIcon}
                    />
                )
            })}</>
        )
    }

    // useEffect(()=>{
    //     addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    /**
    * Markup
    */

    return(
        // <CSSTransition 
        //     in={props.menuButtonIsPressed} 
        //     timeout={1000}
        //     // mountOnEnter
        //     unmountOnExit
        //     classNames={{
        //         enter: '',
        //         enterActive: 'sidebar-open',
        //         exit: '',
        //         exitActive: 'sidebar-close'
        //     }}
        // > 
            <div className={props.menuButtonIsPressed ? "sidebar-mounted" : "sidebar-unmounted"}>
                {renderToolbarItems()}
            </div>
        // </CSSTransition>
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
)(Sidebar);
 
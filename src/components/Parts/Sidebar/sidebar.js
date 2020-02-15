/**
* Libraries
*/

import React from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    CSSTransition 
} from 'react-transition-group';

import {
    withRouter
} from 'react-router-dom';

/**
* Styles
*/

import './sidebar.scss';

/**
* Components
*/

import ToolbarItem from '../../SmallParts/ToolbarItem/toolbarItem';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    toolabarItems
} from '../../../constants/toolbarItems';

/**
* Sidebar component definition and export
*/

export const Sidebar = (props) => {

    /**
    * Methods
    */

    const sidebarOnClick = (path) => {
        props.history.push(`/${path}`);
    }

    const renderToolbarItems = () => {
        return(
            <div className={props.menuButtonIsPressed ? "sidebar-mounted-items" : "sidebar-unmounted-items"}>
                {toolabarItems.map((el) => {
                    return(
                        <ToolbarItem 
                            key={el.id}
                            text={el.text}
                            className="sidebar-item"
                            options={el.options}
                            onClick={() => sidebarOnClick(el.path)}
                            optionClassName="sidebar-item-options"
                        />
                    )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <CSSTransition 
            in={props.menuButtonIsPressed} 
            timeout={2000}
            // mountOnEnter
            unmountOnExit
            classNames={{
                enter: '',
                enterActive: 'sidebar-mounted',
                exit: '',
                exitActive: 'sidebar-unmounted'
            }}
        > 
            <div className="sidebar">
                {renderToolbarItems()}
            </div>
        </CSSTransition>
    );
}
 export default connect(
    (state) => {
        return {
            menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    }
)(withRouter(Sidebar));
 
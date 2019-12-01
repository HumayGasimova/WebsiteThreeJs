/**
* Libraries
*/

import React from 'react';

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

import Parallax from '../Parallax/Parallax';
import Toolbar from '../Parts/Toolbar/toolbar';
import Sidebar from '../Parts/Sidebar/sidebar';
import Backdrop from '../../library/Backdrop/backdrop';

/**
* Styles
*/

import './home.scss';

/**
* Actions
*/

import * as Actions from '../../actions';

/**
* Selectors
*/

import * as Selectors from '../../reducers/selectors';

/**
* Home component definition and export
*/

export const Home = (props) => {

    const renderSidebar = () => {
        if(props.menuButtonIsPressed){
            return(
                <div>
                    <Sidebar 
                        className={"sidebar-open"} 
                        classNameIcon={"sidebar-icon-open"}
                    /> 
                    <Backdrop 
                        show 
                        onClick={() => props.menuButtonIsToggled(false)}
                    />
                </div>
            )
        }else{
            return(
                <div>
                    <Sidebar 
                        className={"sidebar-close"} 
                        classNameIcon={"sidebar-icon-close"}
                    />
                </div>
            )
        }
       
    }

    /**
    * Markup
    */

    return(
        <div className="home">
            <Toolbar/>
                {props.sidebarOnInit ? renderSidebar() : null}
            <Parallax/>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
            sidebarOnInit: Selectors.getSidebarOnInitState(state),
        };
    },
    (dispatch) => {
        return {
            menuButtonIsToggled: bindActionCreators(Actions.menuButtonIsToggled, dispatch),
        };
    }
)(Home);
 
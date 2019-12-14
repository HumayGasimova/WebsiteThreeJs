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

    const [closeOnResize, setCloseOnResize] = useState(false);

    /**
    * Methods
    */

    const handleSidebarOnResize = () => {
        if(!props.menuButtonIsPressed){
            setCloseOnResize(true);
        }
        console.log("dd")
    }

    useEffect(() => {
        window.addEventListener('resize', handleSidebarOnResize);

        return () => window.removeEventListener('resize', handleSidebarOnResize);
    }, [])

    const renderSidebar = () => {
        if(props.menuButtonIsPressed){
            return(
                <>
                    <Sidebar 
                        className={"sidebar-open"} 
                        classNameIcon={"sidebar-icon-open"}
                    /> 
                    <Backdrop 
                        show 
                        onClick={() => props.menuButtonIsToggled(false)}
                    />
                </>
            )
        }else{
            return(
                <>
                    <Sidebar 
                        className={closeOnResize ? "sidebar-unmount" : "sidebar-close"} 
                        classNameIcon={closeOnResize ? "sidebar-unmount" : "sidebar-icon-close"}
                    />
                </>
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
 
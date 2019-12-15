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

import { 
    CSSTransition ,
} from 'react-transition-group';

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

    // const [closeOnResize, setCloseOnResize] = useState(false);
    // const [openOnResize, setOpenOnResize] = useState(false);

    /**
    * Methods
    */

    // const handleSidebarOnResize = (e) => {
    //    console.log(e.target.innerWidth)
    //     if(!props.menuButtonIsPressed && 950 <= e.target.innerWidth <= 1000){
    //         setCloseOnResize(true);
    //     }
    //     if(!props.menuButtonIsPressed && e.target.innerWidth > 950){
    //         setCloseOnResize(false);
    //     }
    //     if(props.menuButtonIsPressed && 950 <= e.target.innerWidth <= 1000){
    //         setOpenOnResize(true);
    //     }
    //     if(props.menuButtonIsPressed && e.target.innerWidth > 950){
    //         setOpenOnResize(false);
    //     }
       
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', () => handleSidebarOnResize(event));

    //     return () => window.removeEventListener('resize', handleSidebarOnResize);
    // }, [props.menuButtonIsPressed])

    const renderSidebar = () => {
        if(props.menuButtonIsPressed){
            return(
                <>
                    <Backdrop 
                        show 
                        onClick={() => props.menuButtonIsToggled(false)}
                    />
                </>
            )
        }
       
    }


    // const renderSidebar = () => {
    //     if(props.menuButtonIsPressed){
    //         return(
    //             <>
    //                 <Sidebar 
    //                     className="sidebar-open"
    //                     // classNameIcon="sidebar-icon-open"
    //                     // className={openOnResize ? "sidebar-mounted" : "sidebar-open"} 
    //                     // classNameIcon={openOnResize ? "sidebar-mounted-icon" : "sidebar-icon-open"}
    //                 /> 
    //                 <Backdrop 
    //                     show 
    //                     onClick={() => props.menuButtonIsToggled(false)}
    //                 />
    //             </>
    //         )
    //     }else{
    //         return(
    //             <>
    //                 <Sidebar 
    //                     className="sidebar-close"
    //                     classNameIcon="sidebar-icon-close"
    //                     // className={closeOnResize ? "sidebar-unmounted-close" : "sidebar-close"} 
    //                     // classNameIcon={closeOnResize ? "sidebar-unmounted-icon-close" : "sidebar-icon-close"}
    //                 />
    //             </>
    //         )
    //     }
   
    // }

    /**
    * Markup
    */

    return(
        <div className="home">
            <Toolbar/>
            <Sidebar 
                menuButtonIsPressed={props.menuButtonIsPressed}
            /> 
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
 
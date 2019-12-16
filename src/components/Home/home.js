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
* Constants
*/

import * as Icon from '../../constants/iconNames';

/**
* Home component definition and export
*/

export const Home = (props) => {

    // const [closeOnResize, setCloseOnResize] = useState(false);
    // const [openOnResize, setOpenOnResize] = useState(false);

    /**
    * Methods
    */

    const handleSidebarOnScroll = (e) => {
        let scrollHeight = document.body.scrollTop;
        let homeElement = document.getElementById(Icon.HOME).offsetTop;
        let servicesElement = document.getElementById(Icon.SERVICES).offsetTop;
        let aboutElement = document.getElementById(Icon.ABOUT).offsetTop;
        let galleryElement = document.getElementById(Icon.GALLERY).offsetTop;
        let contactElement = document.getElementById(Icon.CONTACT).offsetTop;
      if(scrollHeight <= homeElement + 10){
        props.activateIcon(Icon.HOME);
      }
      if(servicesElement -10 <= scrollHeight && scrollHeight <= servicesElement + 10){
        props.activateIcon(Icon.SERVICES);
        console.log("servicesElement", scrollHeight)
        console.log(servicesElement-10, servicesElement+10)
      }
      if(aboutElement - 10 <= scrollHeight && scrollHeight <= aboutElement + 10){
        props.activateIcon(Icon.ABOUT);
        console.log("aboutElement", scrollHeight)
        console.log(aboutElement-10, aboutElement+10)
      }
      if(galleryElement - 10 <= scrollHeight && scrollHeight <= galleryElement + 10){
        props.activateIcon(Icon.GALLERY);
        console.log("galleryElement", scrollHeight, galleryElement)
      }
      if(contactElement - 200 <= scrollHeight && scrollHeight <= contactElement + 10){
        props.activateIcon(Icon.CONTACT);
        console.log("contactElement", scrollHeight, contactElement)
      }
       
    }

    useEffect(() => {
        window.addEventListener('scroll', () => handleSidebarOnScroll(event));

        return () => window.removeEventListener('resize', handleSidebarOnResize);
    }, [props.menuButtonIsPressed])

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
            activateIcon: bindActionCreators(Actions.activateIcon, dispatch),
        };
    }
)(Home);
 
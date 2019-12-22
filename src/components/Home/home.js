/**
* Libraries
*/

import React, {
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
      if(scrollHeight <= homeElement + 100){
        props.activateIcon(Icon.HOME);
      }
      if(servicesElement - 100 <= scrollHeight && scrollHeight <= servicesElement + 100){
        props.activateIcon(Icon.SERVICES);
      }
      if(aboutElement - 100 <= scrollHeight && scrollHeight <= aboutElement + 100){
        props.activateIcon(Icon.ABOUT);
      }
      if(galleryElement - 100 <= scrollHeight && scrollHeight <= galleryElement + 100){
        props.activateIcon(Icon.GALLERY);
      }
      if(contactElement - 200 <= scrollHeight && scrollHeight <= contactElement + 100){
        props.activateIcon(Icon.CONTACT);
      }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => handleSidebarOnScroll(event));

        return () => window.removeEventListener('scroll', handleSidebarOnScroll);
    }, []);

    const renderSidebar = () => {
        if(props.menuButtonIsPressed){
            return(
                <>
                    <Backdrop 
                        show 
                        onClick={() => props.menuButtonIsToggled(false)}
                        className="backdrop-home"
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
            sidebarOnInit: Selectors.getSidebarOnInitState(state)
        };
    },
    (dispatch) => {
        return {
            menuButtonIsToggled: bindActionCreators(Actions.menuButtonIsToggled, dispatch),
            activateIcon: bindActionCreators(Actions.activateIcon, dispatch)
        };
    }
)(Home);
 
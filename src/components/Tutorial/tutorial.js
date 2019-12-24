/**
* Libraries
*/

import React, {
    useEffect,
    useState
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import * as THREE from 'three';

/**
* Components
*/


/**
* Styles
*/

import './tutorial.scss';

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

export const Tutorial = (props) => {

    const [container, setCounter] = useState(React.createRef());

    /**
    * Methods
    */

    useEffect(() => {
        // Set the scene size.
        const WIDTH = 400;
        const HEIGHT = 300;

        // Set some camera attributes.
        const VIEW_ANGLE = 45;
        const ASPECT = WIDTH / HEIGHT;
        const NEAR = 0.1;
        const FAR = 10000;

        // Create a WebGL renderer, camera
        // and a scene
        const renderer = new THREE.WebGLRenderer();
        const camera =
            new THREE.PerspectiveCamera(
                VIEW_ANGLE,
                ASPECT,
                NEAR,
                FAR
            );

        const scene = new THREE.Scene();

        // Add the camera to the scene.
        scene.add(camera);

        // Start the renderer.
        renderer.setSize(WIDTH, HEIGHT);
    }, []);

    /**
    * Markup
    */

    return(
        <div className="tutorial" ref={container}>
            KKK
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
            // sidebarOnInit: Selectors.getSidebarOnInitState(state)
        };
    },
    (dispatch) => {
        return {
            // menuButtonIsToggled: bindActionCreators(Actions.menuButtonIsToggled, dispatch),
            // activateIcon: bindActionCreators(Actions.activateIcon, dispatch)
        };
    }
)(Tutorial);
 
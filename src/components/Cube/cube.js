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

import './cube.scss';

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
* Cube component definition and export
*/

export const Cube = (props) => {


    /**
    * Methods
    */

    useEffect(() => {
        // Get the DOM element to attach to
        const canvas  = document.getElementById('#container');

        // Create a WebGL renderer, camera
        // and a scene
        const renderer = new THREE.WebGLRenderer({canvas});

        const fov = 75;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 5;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

        camera.position.z = 2;

        const scene = new THREE.Scene();

        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;

        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

        const cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        // renderer.render(scene, camera);

        const render = (time) => {
            time *= 0.001;  // convert time to seconds
           
            cube.rotation.x = time;
            cube.rotation.y = time;
           
            renderer.render(scene, camera);
           
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
        
    }, []);

  

    /**
    * Markup
    */

    return(
        <canvas className="tutorial" id="#container">
      
        </canvas>
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
)(Cube);
 
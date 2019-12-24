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

        // Get the DOM element to attach to
        const container = document.getElementById('#container');

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

        // Attach the renderer-supplied
        // DOM element.
        container.appendChild(renderer.domElement);

        // Set up the sphere vars
        const RADIUS = 50;
        const SEGMENTS = 16;
        const RINGS = 16;

        // create the sphere's material
        const sphereMaterial =
        new THREE.MeshLambertMaterial(
        {
            color: 0xCC0000
        });

        // Create a new mesh with
        // sphere geometry - we will cover
        // the sphereMaterial next!
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(RADIUS,
                                    SEGMENTS,
                                    RINGS),
            sphereMaterial);

        // Move the Sphere back in Z so we
        // can see it.
        sphere.position.z = -300;

        // Finally, add the sphere to the scene.
        scene.add(sphere);

        // create a point light
        const pointLight =
        new THREE.PointLight(0xFFFFFF);

        // set its position
        pointLight.position.x = 10;
        pointLight.position.y = 50;
        pointLight.position.z = 130;

        // add to the scene
        scene.add(pointLight);

        // Draw!
        renderer.render(scene, camera);

        // Schedule the first frame.
        requestAnimationFrame(update);
    }, []);

    const update = () => {
        // Draw!
        renderer.render(scene, camera);
      
        // Schedule the next frame.
        requestAnimationFrame(update);
      }

    /**
    * Markup
    */

    return(
        <div className="tutorial" id="#container">
      
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
 
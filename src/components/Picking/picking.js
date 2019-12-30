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

import {
    OrbitControls
} from "three/examples/jsm/controls/OrbitControls";

/**
* Components
*/

import Button from '../../library/Button/button';

/**
* Styles
*/

import './picking.scss';

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

import * as Background from '../../constants/backgrounds';

/**
* Images
*/

import Bg from '../../images/9f1c9c168dbb37bb37eccbffd0e0-1448493.jpg';
import Frame from '../../images/frame.png';

/**
* Picking component definition and export
*/

class PickHelper {
    constructor() {
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
    }
    pick(normalizedPosition, scene, camera, time) {
        // restore the color if there is a picked object
        if (this.pickedObject) {
            this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
            this.pickedObject = undefined;
        }
    
        // cast a ray through the frustum
        this.raycaster.setFromCamera(normalizedPosition, camera);
        // get the list of objects the ray intersected
        const intersectedObjects = this.raycaster.intersectObjects(scene.children);
        if (intersectedObjects.length) {
            // pick the first object. It's the closest one
            this.pickedObject = intersectedObjects[0].object;
            // save its color
            this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();
            // set its emissive color to flashing red/yellow
            this.pickedObject.material.emissive.setHex((time * 8) % 2 > 1 ? 0xFFFF00 : 0xFF0000);
        }
    }
}

export const Picking = (props) => {

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
        const far = 100;

        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 30;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('white');

        // put the camera on a pole (parent it to an object)
        // so we can spin the pole to move the camera around the scene
        const cameraPole = new THREE.Object3D();
        scene.add(cameraPole);
        cameraPole.add(camera);

        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-1, 2, 4);
            camera.add(light);
        }

        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

        const loader = new THREE.TextureLoader();
        const texture = loader.load(Frame);
    
        const numObjects = 100;

        for (let i = 0; i < numObjects; ++i) {
            const material = new THREE.MeshPhongMaterial({
              color: randomColor(),
              map: texture,
              transparent: true,
              side: THREE.DoubleSide,
              alphaTest: 0.1,
            });
        
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
        
            cube.position.set(rand(-20, 20), rand(-20, 20), rand(-20, 20));
            cube.rotation.set(rand(Math.PI), rand(Math.PI), 0);
            cube.scale.set(rand(3, 6), rand(3, 6), rand(3, 6));
        }
        
        const pickPosition = {x: 0, y: 0};
        const pickHelper = new PickHelper();
        clearPickPosition(pickPosition);

        // renderer.render(scene, camera);
        const render = (time) => {
            time *= 0.001;  // convert to seconds;

            if (resizeRendererToDisplaySize(renderer)) {
              const canvas = renderer.domElement;
              camera.aspect = canvas.clientWidth / canvas.clientHeight;
              camera.updateProjectionMatrix();
            }
        
            cameraPole.rotation.y = time * .1;
        
            pickHelper.pick(pickPosition, scene, camera, time);
        
            renderer.render(scene, camera);
        
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);

        window.addEventListener('mousemove', (event) => setPickPosition(pickPosition, canvas,event));
        window.addEventListener('mouseout', () => clearPickPosition(pickPosition));
        window.addEventListener('mouseleave', () => clearPickPosition(pickPosition));
      
        window.addEventListener('touchstart', (event) => {
          // prevent the window from scrolling
          event.preventDefault();
          setPickPosition(pickPosition, canvas, event.touches[0]);
        }, {passive: false});
      
        window.addEventListener('touchmove', (event) => {
          setPickPosition(pickPosition, canvas, event.touches[0]);
        });
      
        window.addEventListener('touchend', clearPickPosition);
        
    }, []);

    const rand = (min, max) => {
        if (max === undefined) {
          max = min;
          min = 0;
        }
        return min + (max - min) * Math.random();
    }

    const randomColor = () => {
        return `hsl(${rand(360) | 0}, ${rand(50, 100) | 0}%, 50%)`;
    }

    const resizeRendererToDisplaySize = (renderer) => {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
    }

    const getCanvasRelativePosition = (event, canvas) => {
        const rect = canvas.getBoundingClientRect();
        return {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
    }

    const setPickPosition = (pickPosition, canvas, event) => {
        const pos = getCanvasRelativePosition(event, canvas);
        pickPosition.x = (pos.x / canvas.clientWidth ) *  2 - 1;
        pickPosition.y = (pos.y / canvas.clientHeight) * -2 + 1;  // note we flip Y
    }

    const clearPickPosition = (pickPosition) => {
        // unlike the mouse which always has a position
        // if the user stops touching the screen we want
        // to stop picking. For now we just pick a value
        // unlikely to pick something
        pickPosition.x = -100000;
        pickPosition.y = -100000;
    }

    /**
    * Markup
    */

    return(
        <>
            <canvas className="cube-canvas" id="#container"/>
        </>
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
)(Picking);
 
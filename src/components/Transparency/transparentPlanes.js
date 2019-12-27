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

import './transparency.scss';

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

import MistyPines from '../../images/Backgrounds/misty_pines_4k.jpg';
import pic1 from '../../images/bigSmile.jpg';
import pic2 from '../../images/happyFace.jpg';

/**
* TransparentPlanes component definition and export
*/

export const TransparentPlanes = (props) => {

    const [backgroundTexture, setBackgroundTexture] = useState(MistyPines);

    /**
    * Methods
    */

    useEffect(() => {
        // Get the DOM element to attach to
        const canvas  = document.getElementById('#container');

        // Create a WebGL renderer, camera
        // and a scene
        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
        });
        renderer.autoClearColor = false;

        const fov = 75;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 25;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

        camera.position.z = 2;
         
        // controls of camera
        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 0, 0);
        controls.update();

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('white');

        // add light
        addLight(scene)(-1, 2, 4);
        addLight(scene)(1, -1, -2);

        //add plane
        const planeWidth = 0.5;
        const planeHeight = 1;
        const geometry = new THREE.PlaneBufferGeometry(planeWidth, planeHeight);

        const loader = new THREE.TextureLoader();

        // renderer.render(scene, camera);

        const render = (time) => {
            time *= 0.001;  // convert time to seconds

            // if the canvas was resized, update camera aspect
            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }
           
            renderer.render(scene, camera);
           
            requestAnimationFrame(render);
        }

        makeInstanceOfPlane(geometry, 'pink', 0, pic1, scene, render, loader);
        makeInstanceOfPlane(geometry, 'lightblue', Math.PI * 0.5, pic2, scene, render, loader);

        requestAnimationFrame(render);
        
    }, [backgroundTexture]);

    const addLight = (scene) => (...pos) => {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-1, 2, 4);
            light.position.set(...pos);
            scene.add(light);
    }

    const hsl = (h, s, l) => {
        return (new THREE.Color()).setHSL(h, s, l);
    }

    const makeInstanceOfPlane = (geometry, color, rotY, url, scene, render, loader) => {
        // const texture = loader.load(url, render);
        // const material = new THREE.MeshPhongMaterial({
        //     color,
        //     map: texture,
        //     opacity: 0.5,
        //     transparent: true,
        //     side: THREE.DoubleSide,
        // });
        
        // const mesh = new THREE.Mesh(geometry, material);
        // scene.add(mesh);
        
        // mesh.rotation.y = rotY;

        const base = new THREE.Object3D();
        scene.add(base);
        base.rotation.y = rotY;
       
        [-1, 1].forEach((x) => {
          const texture = loader.load(url, render);
          texture.offset.x = x < 0 ? 0 : 0.5;
          texture.repeat.x = .5;
          const material = new THREE.MeshPhongMaterial({
            color,
            map: texture,
            opacity: 0.5,
            transparent: true,
            side: THREE.DoubleSide,
          });
       
          const mesh = new THREE.Mesh(geometry, material);

          base.add(mesh);

          mesh.position.x = x * .25;
        });
    }

    const resizeRendererToDisplaySize = (renderer) => {
        const canvas = renderer.domElement;
        //Handling HD-DPI displays
        const pixelRatio = window.devicePixelRatio;

        const width  = canvas.clientWidth  * pixelRatio | 0;
        const height = canvas.clientHeight * pixelRatio | 0;
        
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
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
)(TransparentPlanes);
 
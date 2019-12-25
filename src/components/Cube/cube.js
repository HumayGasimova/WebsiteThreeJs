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
* Images
*/

import Background from '../../images/76-760412_lake-clip-sunset-mountains-vector-png.png';

import PosX from '../../images/forest/Plants/posx.jpg';
import NegX from '../../images/forest/Plants/negx.jpg';
import PosY from '../../images/forest/Plants/posy.jpg';
import NegY from '../../images/forest/Plants/negy.jpg';
import PosZ from '../../images/forest/Plants/posz.jpg';
import NegZ from '../../images/forest/Plants/negz.jpg';

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
        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
        });

        const fov = 75;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

        camera.position.z = 3;

         
        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 0, 0);
        controls.update();

        const scene = new THREE.Scene();

        //Draw background using texture

        // const loader = new THREE.TextureLoader();
        // const bgTexture = loader.load(Background);
        // scene.background = bgTexture;

        {
            const loader = new THREE.CubeTextureLoader();
            const texture = loader.load([
              PosX,
              NegX,
              PosY,
              NegY,
              PosZ,
              NegZ,
            ]);
            scene.background = texture;
        }

        const boxWidth = 1;
        const boxHeight = 1;
        const boxDepth = 1;

        //Add Box Geometry
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

        // const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

        // material which is affected by lights.
        // const material = new THREE.MeshPhongMaterial({color: 0x44aa88});

        // const cube = new THREE.Mesh(geometry, material);

        // scene.add(cube);

        const cubes = [
            makeInstance(geometry, 0x44aa88,  0, scene),
            makeInstance(geometry, 0x8844aa, -2, scene),
            makeInstance(geometry, 0xaa8844,  2, scene),
        ];

        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-1, 2, 4);
            scene.add(light);
        }

        // renderer.render(scene, camera);

        const render = (time) => {
            time *= 0.001;  // convert time to seconds

            // prevent stretching when changing screen size
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();

            // if the canvas was resized, update camera aspect
            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }

            // Set the repeat and offset properties of the background texture
            // to keep the image's aspect correct.
            // Note the image may not have loaded yet.

            // const canvasAspect = canvas.clientWidth / canvas.clientHeight;
            // const imageAspect = bgTexture.image ? bgTexture.image.width / bgTexture.image.height : 1;
            // const aspect = imageAspect / canvasAspect;
            
            // bgTexture.offset.x = aspect > 1 ? (1 - 1 / aspect) / 2 : 0;
            // bgTexture.repeat.x = aspect > 1 ? 1 / aspect : 1;
            
            // bgTexture.offset.y = aspect > 1 ? 0 : (1 - aspect) / 2;
            // bgTexture.repeat.y = aspect > 1 ? 1 : aspect;
           
            cubes.forEach((cube, ndx) => {
                const speed = 1 + ndx * .1;
                const rot = time * speed;
                cube.rotation.x = rot;
                cube.rotation.y = rot;
            });

            // cube.rotation.x = time;
            // cube.rotation.y = time;
            // cube.rotation.z = time;
           
            renderer.render(scene, camera);
           
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
        
    }, []);

    const makeInstance = (geometry, color, x, scene) => {
        const material = new THREE.MeshPhongMaterial({color});
       
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
       
        cube.position.x = x;
       
        return cube;
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
        <canvas className="cube" id="#container"/>
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
 
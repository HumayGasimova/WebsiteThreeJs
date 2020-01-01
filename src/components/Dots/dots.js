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

import './dots.scss';

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
* Shaders
*/

import * as Shaders from './Shaders';

/**
* Images
*/

import Bg from '../../images/9f1c9c168dbb37bb37eccbffd0e0-1448493.jpg';

import PosX from '../../images/mountains/dejavu_ft.png';
import NegX from '../../images/mountains/dejavu_bk.png';
import PosY from '../../images/mountains/dejavu_up.png';
import NegY from '../../images/mountains/dejavu_dn.png';
import PosZ from '../../images/mountains/dejavu_rt.png';
import NegZ from '../../images/mountains/dejavu_lf.png';
//http://www.custommapmakers.org/skyboxes.php

/**
* Dots component definition and export
*/

export const Dots = (props) => {

    const [spheres, setSpheres] = useState(['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',]);

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
        const far = 100;
        // const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

        // camera.position.z = 7;

        
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
            PosX,
            NegX,
            PosY,
            NegY,
            PosZ,
            NegZ,
        ]);
        texture.format = THREE.RGBFormat;
     

        const scene = new THREE.Scene();
        scene.background = texture;

        // const loader = new THREE.TextureLoader();
        // const bgTexture = loader.load(Bg);
        // scene.background = bgTexture;

        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 1, 12);
        camera.lookAt(0, 0, 0);
        scene.add(camera);

        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 0, 0);
        controls.update();

        // const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

        // material which is affected by lights.
        // const material = new THREE.MeshPhongMaterial({color: 0x44aa88});

        // const cube = new THREE.Mesh(geometry, material);

        // scene.add(cube);


        // {
        //     const sphereRadius = 1;
        //     const sphereWidthDivisions = 32;
        //     const sphereHeightDivisions = 16;
        //     const sphereGeo = new THREE.SphereBufferGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
        //     const sphereMat = new THREE.MeshPhongMaterial({color: '#CA8'});
        //     const mesh = new THREE.Mesh(sphereGeo, sphereMat);
        //     mesh.position.set(0, 0, -2);
        //     scene.add(mesh);
        // }

        let updatedSpheres =  spheres.map((el,i) => {
            return makeInstanceOfSphere(randRadius(), 
                32, 
                16, 
                'white',
                randPosition(),
                randPosition(),
                randPosition(),
                // Math.random() * 10000 - 5000, 
                // Math.random() * 10000 - 5000, 
                // Math.random() * 10000 - 5000, 
                scene,
                texture);
        })
        console.log(updatedSpheres)
        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-1, 2, 4);
            // scene.add(light);
            camera.add(light);
        }
        // console.log(renderer.getContext().drawingBufferWidth)
        // console.log(renderer.getContext().drawingBufferHeight)
        // renderer.render(scene, camera);
        const render = (time) => {
            time *= 0.001;  // convert time to seconds

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
           
            updatedSpheres.forEach((sphere, i) => {
                const speed = 1 + i * .1;
                const rot = time * speed;
                const bufferWidth = renderer.getContext().drawingBufferWidth;
                const bufferHeight = renderer.getContext().drawingBufferHeight;
                let valueX = randTranslation();
                let valueY = randTranslation();
                let valueZ = randTranslation();
                sphere.rotation.x = rot;
                sphere.rotation.y = rot;
                
                // console.log(randPosition())
                sphere.position.x = 7 * Math.cos( time/7 + i * 1.1);
                sphere.position.y = 7 * Math.sin( time/7 + i * 1.1);
                sphere.position.y = 7 * Math.sin( time/7 + i * 6.2);
                // sphere.translateX(valueX);
                // sphere.translateY(valueY);
                // sphere.translateZ(valueZ);
            });

            // cube.rotation.x = time;
            // cube.rotation.y = time;
            // cube.rotation.z = time;
           
            renderer.render(scene, camera);
           
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
        
    }, []);

    const randRadius = () => {
        return (Math.floor(Math.random()*7) + 2) / 10;
    }

    const randTranslation = () => {
        return (Math.floor(Math.random()*3) + 1) / 100;
    }

    const randPosition = () => {
        return (Math.random()*40 - 1);
    }

    const makeInstanceOfSphere = (spRadius, spWidth, spHeight, color, x, y, z, scene, texture) => {

        const sphereRadius = spRadius;
        const sphereWidthDivisions = spWidth;
        const sphereHeightDivisions = spHeight;
        const sphereGeo = new THREE.SphereBufferGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
        // const sphereMat = new THREE.MeshPhongMaterial({color});
        const uniforms = {
            mRefractionRatio: { value: 1.02 },
            mFresnelBias: { value: 0.1 },
            mFresnelPower: { value: 2.0 },
            mFresnelScale: { value: 1.0 },
            tCube: { value: null }
        }
        
        var uniforms2 = THREE.UniformsUtils.clone( uniforms );
        uniforms["tCube"].value = texture;

        const material = new THREE.ShaderMaterial( {
            uniforms: uniforms2,
            vertexShader: Shaders.vert,
            fragmentShader: Shaders.frag
        } );
        const sphere = new THREE.Mesh(sphereGeo, material);
        sphere.position.set(x, y, z);

        scene.add(sphere);
            
        sphere.position.x = x;

        return sphere;
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
)(Dots);
 
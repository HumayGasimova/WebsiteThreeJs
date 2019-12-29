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
* Images
*/

import Bg from '../../images/9f1c9c168dbb37bb37eccbffd0e0-1448493.jpg';
// import AutumnHockey from '../../images/Backgrounds/autumn_hockey_8k.jpg';
// import BethnalGreenEntrance from '../../images/Backgrounds/bethnal_green_entrance_4k.jpg';
// import DresdenMoat from '../../images/Backgrounds/dresden_moat_8k.jpg';
// import GrayPier from '../../images/Backgrounds/gray_pier_8k.jpg';
// import Lebombo from '../../images/Backgrounds/lebombo_8k.jpg';
// import MistyPines from '../../images/Backgrounds/misty_pines_4k.jpg';
// import MusicHall from '../../images/Backgrounds/music_hall_01_8k.jpg';
// import SkukuzaGolf from '../../images/Backgrounds/skukuza_golf_4k.jpg';
// import SnowyPark from '../../images/Backgrounds/snowy_park_01_8k.jpg';
// import SpruitSunrise from '../../images/Backgrounds/spruit_sunrise_8k.jpg';
// import SunnyVondelpark from '../../images/Backgrounds/sunny_vondelpark_8k.jpg';
// import UmhlangaSunrise from '../../images/Backgrounds/umhlanga_sunrise_8k.jpg';
// import UrbanStreet from '../../images/Backgrounds/urban_street_01_8k.jpg';

// import AnniversaryLoungeCapture from '../../images/Backgrounds/capture/anniversary_lounge_capture.png';
// import AutumnHockeyCapture from '../../images/Backgrounds/capture/autumn_hockey_capture.png';
// import BethnalGreenEntranceCapture from '../../images/Backgrounds/capture/bethnal_green_entrance_capture.png';
// import DresdenMoatCapture from '../../images/Backgrounds/capture/dresden_moat_capture.png';
// import GrayPierCapture from '../../images/Backgrounds/capture/gray_pier_capture.png';
// import LebomboCapture from '../../images/Backgrounds/capture/lebombo_capture.png';
// import MistyPinesCapture from '../../images/Backgrounds/capture/misty_pines_capture.png';
// import MusicHallCapture from '../../images/Backgrounds/capture/music_hall_01_capture.png';
// import SkukuzaGolfCapture from '../../images/Backgrounds/capture/skukuza_golf_capture.png';
// import SnowyParkCapture from '../../images/Backgrounds/capture/snowy_park_01_capture.png';
// import SpruitSunriseCapture from '../../images/Backgrounds/capture/spruit_sunrise_capture.png';
// import SunnyVondelparkCapture from '../../images/Backgrounds/capture/sunny_vondelpark_capture.png';
// import UmhlangaSunriseCapture from '../../images/Backgrounds/capture/umhlanga_sunrise_capture.png';
// import UrbanStreetCapture from '../../images/Backgrounds/capture/urban_street_01_capture.png';

/**
* Dots component definition and export
*/

export const Dots = (props) => {

    // const [backgroundTexture, setBackgroundTexture] = useState(AnniversaryLounge);

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

        const scene = new THREE.Scene();
        const loader = new THREE.TextureLoader();
        const bgTexture = loader.load(Bg);
        scene.background = bgTexture;

        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 1, 7);
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

        const spheres = [
            makeInstanceOfSphere(0.2, 32, 16, 'white', 0, 0 , -1, scene),
            makeInstanceOfSphere(0.2, 32, 16, 'white', 1, 0 , 1, scene),
            makeInstanceOfSphere(0.2, 32, 16, 'white', -1, 1 , -1, scene),
        ];

        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-1, 2, 4);
            // scene.add(light);
            camera.add(light);
        }

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
           
            spheres.forEach((sphere, ndx) => {
                const speed = 1 + ndx * .1;
                const rot = time * speed;
                sphere.rotation.x = rot;
                sphere.rotation.y = rot;

                sphere.translateX(0.01);
                sphere.translateY(0.01);
                sphere.translateZ(0.01);
            });

            // cube.rotation.x = time;
            // cube.rotation.y = time;
            // cube.rotation.z = time;
           
            renderer.render(scene, camera);
           
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
        
    }, []);

    const makeInstanceOfSphere = (spRadius, spWidth, spHeight, color, x, y, z, scene) => {
        const sphereRadius = spRadius;
        const sphereWidthDivisions = spWidth;
        const sphereHeightDivisions = spHeight;
        const sphereGeo = new THREE.SphereBufferGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
        const sphereMat = new THREE.MeshPhongMaterial({color});
        const sphere = new THREE.Mesh(sphereGeo, sphereMat);
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
 
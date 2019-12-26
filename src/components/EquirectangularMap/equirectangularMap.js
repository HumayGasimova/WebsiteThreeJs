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

import './equirectangularMap.scss';

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

import AnniversaryLounge from '../../images/Backgrounds/anniversary_lounge_8k.jpg';
import AutumnHockey from '../../images/Backgrounds/autumn_hockey_8k.jpg';
import BethnalGreenEntrance from '../../images/Backgrounds/bethnal_green_entrance_4k.jpg';
import DresdenMoat from '../../images/Backgrounds/dresden_moat_8k.jpg';
import GrayPier from '../../images/Backgrounds/gray_pier_8k.jpg';
import Lebombo from '../../images/Backgrounds/lebombo_8k.jpg';
import MistyPines from '../../images/Backgrounds/misty_pines_4k.jpg';
import MusicHall from '../../images/Backgrounds/music_hall_01_8k.jpg';
import SkukuzaGolf from '../../images/Backgrounds/skukuza_golf_4k.jpg';
import SnowyPark from '../../images/Backgrounds/snowy_park_01_8k.jpg';
import SpruitSunrise from '../../images/Backgrounds/spruit_sunrise_8k.jpg';
import SunnyVondelpark from '../../images/Backgrounds/sunny_vondelpark_8k.jpg';
import UmhlangaSunrise from '../../images/Backgrounds/umhlanga_sunrise_8k.jpg';
import UrbanStreet from '../../images/Backgrounds/urban_street_01_8k.jpg';

import AnniversaryLoungeCapture from '../../images/Backgrounds/capture/anniversary_lounge_capture.png';
import AutumnHockeyCapture from '../../images/Backgrounds/capture/autumn_hockey_capture.png';
import BethnalGreenEntranceCapture from '../../images/Backgrounds/capture/bethnal_green_entrance_capture.png';
import DresdenMoatCapture from '../../images/Backgrounds/capture/dresden_moat_capture.png';
import GrayPierCapture from '../../images/Backgrounds/capture/gray_pier_capture.png';
import LebomboCapture from '../../images/Backgrounds/capture/lebombo_capture.png';
import MistyPinesCapture from '../../images/Backgrounds/capture/misty_pines_capture.png';
import MusicHallCapture from '../../images/Backgrounds/capture/music_hall_01_capture.png';
import SkukuzaGolfCapture from '../../images/Backgrounds/capture/skukuza_golf_capture.png';
import SnowyParkCapture from '../../images/Backgrounds/capture/snowy_park_01_capture.png';
import SpruitSunriseCapture from '../../images/Backgrounds/capture/spruit_sunrise_capture.png';
import SunnyVondelparkCapture from '../../images/Backgrounds/capture/sunny_vondelpark_capture.png';
import UmhlangaSunriseCapture from '../../images/Backgrounds/capture/umhlanga_sunrise_capture.png';
import UrbanStreetCapture from '../../images/Backgrounds/capture/urban_street_01_capture.png';

/**
* EquirectangularMap component definition and export
*/

export const EquirectangularMap = (props) => {

    const [backgroundTexture, setBackgroundTexture] = useState(AnniversaryLounge);

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
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

        camera.position.z = 7;

         
        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 0, 0);
        controls.update();

        const scene = new THREE.Scene();

        //backlground scene
        const bgScene = new THREE.Scene();
        let bgMesh;

        {
            const loader = new THREE.TextureLoader();
            const texture = loader.load(
                backgroundTexture
            );
            texture.magFilter = THREE.LinearFilter;
            texture.minFilter = THREE.LinearFilter;
           
            const shader = THREE.ShaderLib.equirect;
              const material = new THREE.ShaderMaterial({
              fragmentShader: shader.fragmentShader,
              vertexShader: shader.vertexShader,
              uniforms: shader.uniforms,
              depthWrite: false,
              side: THREE.BackSide,
            });
              material.uniforms.tEquirect.value = texture;
            const plane = new THREE.BoxBufferGeometry(2, 2, 2);
            bgMesh = new THREE.Mesh(plane, material);
            bgScene.add(bgMesh);
          }

        //Draw background using texture

        // const loader = new THREE.TextureLoader();
        // const bgTexture = loader.load(Background);
        // scene.background = bgTexture;

        // {
        //     const loader = new THREE.CubeTextureLoader();
        //     const texture = loader.load([
        //       PosX,
        //       NegX,
        //       PosY,
        //       NegY,
        //       PosZ,
        //       NegZ,
        //     ]);
        //     scene.background = texture;
        // }

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


        {
            const sphereRadius = 1;
            const sphereWidthDivisions = 32;
            const sphereHeightDivisions = 16;
            const sphereGeo = new THREE.SphereBufferGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
            const sphereMat = new THREE.MeshPhongMaterial({color: '#CA8'});
            const mesh = new THREE.Mesh(sphereGeo, sphereMat);
            mesh.position.set(0, 0, -2);
            scene.add(mesh);
        }

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

            bgMesh.position.copy(camera.position);
            renderer.render(bgScene, camera);
           
            renderer.render(scene, camera);
           
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
        
    }, [backgroundTexture]);

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

    const setBackground = (option) => {
        switch (option){
            case Background.AnniversaryLounge:
                return setBackgroundTexture(AnniversaryLounge);
            case Background.AutumnHockey:
                return setBackgroundTexture(AutumnHockey);
            case Background.BethnalGreenEntrance:
                return setBackgroundTexture(BethnalGreenEntrance);
            case Background.DresdenMoat:
                return setBackgroundTexture(DresdenMoat);
            case Background.GrayPier:
                return setBackgroundTexture(GrayPier);
            case Background.Lebombo:
                return setBackgroundTexture(Lebombo);
            case Background.MistyPines:
                return setBackgroundTexture(MistyPines);
            case Background.MusicHall:
                return setBackgroundTexture(MusicHall);
            case Background.SkukuzaGolf:
                return setBackgroundTexture(SkukuzaGolf);
            case Background.SnowyPark:
                return setBackgroundTexture(SnowyPark);
            case Background.SpruitSunrise:
                return setBackgroundTexture(SpruitSunrise);
            case Background.SunnyVondelpark:
                return setBackgroundTexture(SunnyVondelpark);
            case Background.UmhlangaSunrise:
                return setBackgroundTexture(UmhlangaSunrise);
            case Background.UrbanStreet:
                return setBackgroundTexture(UrbanStreet); 
        }
    }

    /**
    * Markup
    */

    return(
        <>
            <canvas className="cube-canvas" id="#container"/>
            {console.log("state",backgroundTexture)}
            <div className="cube-images">
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.AnniversaryLounge)}
                >
                    <img className="cube-image" src={AnniversaryLoungeCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.AutumnHockey)}
                >
                    <img className="cube-image" src={AutumnHockeyCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.BethnalGreenEntrance)}
                >
                    <img className="cube-image" src={BethnalGreenEntranceCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.DresdenMoat)}
                >
                    <img className="cube-image" src={DresdenMoatCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.GrayPier)}
                >
                    <img className="cube-image" src={GrayPierCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.Lebombo)}
                >
                    <img className="cube-image" src={LebomboCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.MistyPines)}
                >
                    <img className="cube-image" src={MistyPinesCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.MusicHall)}
                >
                    <img className="cube-image" src={MusicHallCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.SkukuzaGolf)}
                >
                    <img className="cube-image" src={SkukuzaGolfCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.SnowyPark)}
                >
                    <img className="cube-image" src={SnowyParkCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.SpruitSunrise)}
                >
                    <img className="cube-image" src={SpruitSunriseCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.SunnyVondelpark)}
                >
                    <img className="cube-image" src={SunnyVondelparkCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.UmhlangaSunrise)}
                >
                    <img className="cube-image" src={UmhlangaSunriseCapture}/>
                </Button>
                <Button 
                    className="cube-options"
                    onClick={() => setBackground(Background.UrbanStreet)}
                >
                    <img className="cube-image" src={UrbanStreetCapture}/>
                </Button>
            </div>
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
)(EquirectangularMap);
 
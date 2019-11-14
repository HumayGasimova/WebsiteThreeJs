/**
* Libraries
*/

import React,{
    Component
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

/**
 * Styles
 */

import './canvas.scss';
import Nature from '../../images/76-760412_lake-clip-sunset-mountains-vector-png.png';

/**
* Selectors
*/

import * as Selectors from '../../reducers/selectors';

/**
* Actions
*/

import * as Actions from '../../actions';

/**
 * App component definition and export
 */


export class Canvas extends Component {

    
    /**
    * Methods
    */

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas = () => {
        const canvas = this.refs.canvas;
        this.ctx = canvas.getContext("2d");
        const img = this.refs.image;
        this.ctx.imageSmoothingEnabled = true;

        this.ctx.fillStyle = "rgba(185, 106, 180, 0.7)";
        // ctx.fillRect(10, 10, 50, 50);
        // ctx.fillStyle = "rgba(106, 185, 148, 0.5)";
        // ctx.fillRect(370, 30, 60, 80);
        // ctx.fillStyle = "rgba(225, 152, 89, 1)";
        // ctx.fillRect(700, 270, 80, 70);

        // ctx.beginPath();
        // ctx.moveTo(10, 10);
        // ctx.lineTo(70, 70);
        // ctx.lineTo(40, 80);
        // ctx.strokeStyle = "#53D2F9";
        // ctx.stroke();

        // img.onload = () => {
        //     this.ctx.drawImage(img, 0, 0)
        //     this.ctx.font = "100px Arial"
        //     this.ctx.fillText("Nature", 340, 125)
        // }

        // for (let i = 0; i < 130; i++) {
        //     let x = Math.random() * window.innerWidth;
        //     let y = Math.random() * window.innerHeight;
        //     ctx.beginPath();
        //     ctx.arc(x, y, 10, 0, Math.PI * 2, false);
        //     ctx.strokeStyle = 'blue';
        //     ctx.stroke();
        // }
       
        this.animate();
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.ctx.clearRect(0, 0, 1000, 700);
        this.ctx.beginPath();
        this.ctx.arc(this.props.x, 200, 10, 0, Math.PI * 2, false);
        this.ctx.strokeStyle = 'blue';
        this.ctx.stroke();
       
        this.props.moveCircle(this.props.dx)
        // this.x += this.dx;
    }

    /**
    * Markup
    */

    render(){
        return(
            <div>
                <canvas width="1000" height="700" style={{border: "2px solid black"}} ref="canvas" ></canvas>
                <img src={Nature} ref="image"/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            x: Selectors.getXState(state),
            dx: Selectors.getDxState(state),

        };
    },
    (dispatch) => {
        return {
            moveCircle: bindActionCreators(Actions.moveCircle, dispatch),
      
        };
    }
)(Canvas);
 
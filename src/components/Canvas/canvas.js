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
* Utility
*/

import * as Utility from '../../utility';

/**
 * App component definition and export
 */


export class Canvas extends Component {

    
    /**
    * Methods
    */

    componentDidMount() {
        this.updateCanvas();
        this.props.fillCirclesArray();
    }

    updateCanvas = () => {
        const canvas = this.refs.canvas;
        this.ctx = canvas.getContext("2d");
        const img = this.refs.image;

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
        // let randomX = Utility.getRandomCoordianteX();
        // let randomY = Utility.getRandomCoordianteY();
        // let randomDx = Utility.getRandomVelocity();
        // let randomDy = Utility.getRandomVelocity();
        // console.log(randomDx, randomDy)
        // this.props.updateCoordinates(randomX, randomY);
        // this.props.updateVelocities(randomDx, randomDy);
        this.animate();
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        let circlesArray = [...this.props.circles];
        this.ctx.clearRect(0, 0, (innerWidth - 35), innerHeight);
        circlesArray.map((el, i) => {
            this.ctx.beginPath();
            this.ctx.arc(el.x, el.y, el.radius, 0, Math.PI * 2, false);
            this.ctx.strokeStyle = 'blue';
            this.ctx.stroke();

            if(el.x + el.radius > (window.innerWidth-35) || el.x - el.radius < 0){
                this.props.changeDirectionOfXMove(el.id);
            }
    
            if(el.y + el.radius > (window.innerHeight) || el.y - el.radius < 0){
                this.props.changeDirectionOfYMove(el.id);
            }

            this.props.moveCircleXCoordinate(el.dx, el.id);
            this.props.moveCircleYCoordinate(el.dy, el.id);
        })
    }

    /**
    * Markup
    */

    render(){
        return(
            <div>
                <canvas width={window.innerWidth - 35} height={window.innerHeight} style={{border: "2px solid black"}} ref="canvas" ></canvas>
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
            y: Selectors.getYState(state),
            dy: Selectors.getDyState(state),
            circles: Selectors.getCirclesState(state),
        };
    },
    (dispatch) => {
        return {
            moveCircleXCoordinate: bindActionCreators(Actions.moveCircleXCoordinate, dispatch),
            moveCircleYCoordinate: bindActionCreators(Actions.moveCircleYCoordinate, dispatch),
            changeDirectionOfXMove: bindActionCreators(Actions.changeDirectionOfXMove, dispatch),
            changeDirectionOfYMove: bindActionCreators(Actions.changeDirectionOfYMove, dispatch),
            updateCoordinates: bindActionCreators(Actions.updateCoordinates, dispatch),
            updateVelocities: bindActionCreators(Actions.updateVelocities, dispatch),
            fillCirclesArray: bindActionCreators(Actions.fillCirclesArray, dispatch),
        };
    }
)(Canvas);
 
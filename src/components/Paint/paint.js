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

// import Button from '../../library/Button/button';

/**
* Styles
*/

import './paint.scss';

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
import Button from '../../library/Button/button';

/**
 * Paint component definition and export
 */


export class Paint extends Component {

    
    /**
    * Methods
    */

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas = () => {
        const canvas = this.refs.canvas;
        this.ctx = canvas.getContext("2d");
        canvas.addEventListener('mousedown', (e) => {
            // console.log(e.x, canvas.offsetLeft, canvas.offsetTop)
            // console.log(e.x)
            this.props.mouseDown(true);
            this.onPaint(e.x - 20, e.y - 20, false)
        })

        canvas.addEventListener('mousemove', (e) => {
            if(this.props.mousePressed){
                this.onPaint(e.x- 20, e.y- 20, true)
            }
            
        })

        canvas.addEventListener('mouseup', (e) => {
            this.props.mouseDown(false);
        })
        
    }

    onPaint = (x, y, mousePressed) => {
        
        if(mousePressed){
            this.ctx.strokeStyle = 'black';
            this.ctx.lineWidth = 10;
            this.ctx.lineJoin = "round";
            this.ctx.moveTo(lastX, lastY);
            this.ctx.lineTo(x, y);
            // this.ctx.closePath();
            this.ctx.stroke();
        }
        let lastX = x;
        let lastY = y;
        console.log(lastX, lastY)
      
    }

    clearCanvas = () => {
        this.ctx.clearRect(0, 0, (innerWidth - 35), innerHeight);
    }

    /**
    * Markup
    */

    render(){
        return(
            <div>
                <canvas width={window.innerWidth - 35} height={window.innerHeight} style={{border: "2px solid black"}} ref="canvas" ></canvas>
                <Button
                    onClick={this.clearCanvas}
                    text={"Press"}
                    // disabled={isNaN(this.props.numberOfBalls)}
                />
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            mousePressed: Selectors.getMousePressedState(state),
        };
    },
    (dispatch) => {
        return {
            mouseDown: bindActionCreators(Actions.mouseDown, dispatch),
        };
    }
)(Paint);
 
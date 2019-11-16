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

import { 
    SketchPicker  
} from 'react-color';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

import { 
    faEraser, 
    faRedoAlt 
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import Backdrop from '../../library/Backdrop/backdrop';

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
            this.props.captureLastXY(e.x - 190, e.y - 10)
            // this.onPaint(e.x - 190, e.y - 10, false)
        })

        canvas.addEventListener('mousemove', (e) => {
            if(this.props.mousePressed){
                this.props.captureXY(e.x - 190, e.y - 10)
                // this.onPaint(e.x - 190, e.y - 10, true)
                this.onPaint()
            }
            
        })

        canvas.addEventListener('mouseup', (e) => {
            this.props.mouseDown(false);
        })

        // canvas.addEventListener('mouseleave', (e) => {
        //     this.props.mouseDown(false);
        // })
        
    }

    onPaint = () => {
        this.ctx.strokeStyle = this.props.color;
        this.ctx.lineWidth = 10;
        this.ctx.lineJoin = "round";
        this.ctx.beginPath();
        this.ctx.moveTo(this.props.lastX, this.props.lastY);
        
        this.ctx.lineTo(this.props.x, this.props.y);
        this.ctx.closePath();
        this.ctx.stroke();
        this.props.captureLastXY(this.props.x, this.props.y)
    }

    clearCanvas = () => {
        this.ctx.clearRect(0, 0, (innerWidth - 35), innerHeight);
    }

    handleChangeComplete  = (e) => {
 
        let color = `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb.a})`;
        this.props.getColor(color);
        console.log(this.props.color)
        // this.props.toggleColorPicker(false)
    }
    
    colorHandler = () => {
        this.props.toggleColorPicker(true)
    }

    handleMouseLeave = () => {
        this.props.toggleColorPicker(false)
    }
    

    /**
    * Markup
    */

    render(){
        return(
            <div className="paint">
                <div className="paint-tool-box">
                    <div className="paint-text">Color</div>
                    <div className="paint-button">
                        <div 
                            className="paint-color" 
                            style={{background: `${this.props.color}`}}
                            onClick={this.colorHandler}    
                        />
                    </div>

                    <div className="paint-text">Bg Color</div>
                    <div className="paint-button">
                        <div className="paint-bg-color"/>
                    </div>

                    <div className="paint-text">Tools</div>
                    <div className="paint-tools-button">
                        <div className="paint-tools-button-erase">
                            <FontAwesomeIcon icon={faEraser}/>
                        </div>
                        <div className="paint-tools-button-refresh">
                            <FontAwesomeIcon icon={faRedoAlt} color="white"/>
                        </div>
                    </div>

                    <div className="paint-text">Size (5)</div>
                    <div className="paint-button">
                        <div className="paint-bg-color"/>
                    </div>

                    <div className="paint-text">Canvas</div>
                    <div className="paint-canvas-wrapper">
                        <div className="paint-button"/>
                        <div className="paint-button"/>
                        <div className="paint-button"/>
                    </div>
                    {this.props.colorPickerIsShown ? 
                        <div className="paint-sketchPicker" onMouseLeave={this.handleMouseLeave} >
                            <SketchPicker
                                color={ this.props.color }
                                onChangeComplete={this.handleChangeComplete }
                                // onChange={ this.handleChangeComplete }
                                // onSwatchHover={this.handleChangeComplete}
                            /> 
                         
                        </div> : null}
                    
                </div>
                <canvas width={window.innerWidth - 200} height={window.innerHeight-30} style={{border: "2px solid black"}} ref="canvas" ></canvas>
                {/* <Button
                    onClick={this.clearCanvas}
                    text={"Press"}
                    // disabled={isNaN(this.props.numberOfBalls)}
                /> */}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            mousePressed: Selectors.getMousePressedState(state),
            color: Selectors.getColorState(state),
            lastX: Selectors.getLastXState(state),
            lastY: Selectors.getLastYState(state),
            x: Selectors.getXState(state),
            y: Selectors.getYState(state),
            colorPickerIsShown: Selectors.getColorPickerIsShownState(state),
        };
    },
    (dispatch) => {
        return {
            mouseDown: bindActionCreators(Actions.mouseDown, dispatch),
            getColor: bindActionCreators(Actions.getColor, dispatch),
            captureLastXY: bindActionCreators(Actions.captureLastXY, dispatch),
            captureXY: bindActionCreators(Actions.captureXY, dispatch),
            toggleColorPicker: bindActionCreators(Actions.toggleColorPicker, dispatch),
        };
    }
)(Paint);
 
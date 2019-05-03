import React,{
    Component
} from 'react';
import './winnersLine.scss';

class diagonalLineRight extends Component {

    render(){
        return(
            // <div className={this.props.player ? "diagonalLineRightBrown" : "diagonalLineRightWhite"}/>
            <svg  
                className={this.props.player ? "diagonalLineRightBrown" : "diagonalLineRightWhite"} 
                viewBox="330 155 303 303" >
                <line x1={this.props.coordinateX1} y1={this.props.coordinateY1} x2={this.props.coordinateX2} y2={this.props.coordinateY2}/>
            </svg>
        );
    }
}

export default diagonalLineRight;

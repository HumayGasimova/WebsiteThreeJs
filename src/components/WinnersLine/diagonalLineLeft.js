import React,{
    Component
} from 'react';
import './winnersLine.scss';

class diagonalLineLeft extends Component {

    render(){
        return(
            // <div className={this.props.player ? "diagonalLineLeftBrown" : "diagonalLineLeftWhite"}/>
            <svg  
                className={this.props.player ? "diagonalLineLeftBrown" : "diagonalLineLeftWhite"}
                preserveAspectRatio="xMidYMid meet"
                viewBox="280 155 303 303" >
                <line 
                x1={this.props.coordinateX1} y1={this.props.coordinateY1} x2={this.props.coordinateX2} y2={this.props.coordinateY2} />
            </svg>
        );
    }
}

export default diagonalLineLeft;

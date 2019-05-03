import React,{
    Component
} from 'react';
import './winnersLine.scss';

class verticalLine extends Component {

    render(){
        return(
            <svg  
                className={this.props.player ? "verticalLineBrown" : "verticalLineWhite"} 
                viewBox="125 155 303 303">
                <line x1={this.props.coordinateX1} y1={this.props.coordinateY1} x2={this.props.coordinateX2} y2={this.props.coordinateY2}/>
            </svg>
        );
    }
}

export default verticalLine;

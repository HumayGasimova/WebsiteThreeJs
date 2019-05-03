import React,{
    Component
} from 'react';
import './winnersLine.scss';

class horizontalLine extends Component {

    render(){
        return(
            <div className={this.props.player ? "horizontalLineBrown" : "horizontalLineWhite"}/>
            // <svg  
            //     className={this.props.player ? "horizontalLineBrown" : "horizontalLineWhite"} 
            //     width="100" 
            //     height="100">
            //     <line x1={this.props.x} y1={this.props.y} x2={this.props.x} y2={this.props.y}/>
            // </svg>
        );
    }
}

export default horizontalLine;

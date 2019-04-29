import React,{
    Component
} from 'react';
import './winnersLine.scss';

class diagonalLineRight extends Component {

    render(){
        return(
            // <div className={this.props.player ? "diagonalLineRightBrown" : "diagonalLineRightWhite"}/>
            <svg  
                class={this.props.player ? "diagonalLineRightBrown" : "diagonalLineRightWhite"} 
                width="100" 
                height="100">
                <line x1="293" y1="5" x2="5" y2="293"/>
            </svg>
        );
    }
}

export default diagonalLineRight;

import React,{
    Component
} from 'react';
import './winnersLine.scss';

class diagonalLineLeft extends Component {

    render(){
        return(
            // <div className={this.props.player ? "diagonalLineLeftBrown" : "diagonalLineLeftWhite"}/>
            <svg  
                class={this.props.player ? "diagonalLineRightBrown" : "diagonalLineRightWhite"}
                width="150" 
                height="160" >
                <line x1="5" y1="5" x2="293" y2="293" />
            </svg>
        );
    }
}

export default diagonalLineLeft;

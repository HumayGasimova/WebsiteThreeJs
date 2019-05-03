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
                viewBox="240 155 303 303" >
                <line x1="285" y1="215" x2="495" y2="425" />
            </svg>
        );
    }
}

export default diagonalLineLeft;

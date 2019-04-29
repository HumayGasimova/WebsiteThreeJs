import React,{
    Component
} from 'react';
import './winnersLine.scss';

class diagonalLineRight extends Component {

    render(){
        return(
            <div className={this.props.player ? "diagonalLineRightBrown" : "diagonalLineRightWhite"}/>
        );
    }
}

export default diagonalLineRight;

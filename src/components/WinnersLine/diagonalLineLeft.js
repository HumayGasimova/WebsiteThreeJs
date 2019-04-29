import React,{
    Component
} from 'react';
import './winnersLine.scss';

class diagonalLineLeft extends Component {

    render(){
        return(
            <div className={this.props.player ? "diagonalLineLeftBrown" : "diagonalLineLeftWhite"}/>
        );
    }
}

export default diagonalLineLeft;

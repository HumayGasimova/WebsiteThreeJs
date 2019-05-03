import React,{
    Component
} from 'react';
import './winnersLine.scss';

class verticalLine extends Component {

    render(){
        return(
            <div className={this.props.player ? "verticalLineBrown" : "verticalLineWhite"}/>
        );
    }
}

export default verticalLine;

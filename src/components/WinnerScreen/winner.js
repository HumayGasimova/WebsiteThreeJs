import React,{
    Component
} from 'react';
import O from '../XO/o';
import './winner.scss';

class Winner extends Component {

    render(){
        return(
            <div className={this.props.winner === "O" ? "winnerO" : "winnerX"}>
                WINNER!
            </div>
        );
    }
}

export default Winner;

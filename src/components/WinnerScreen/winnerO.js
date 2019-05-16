import React,{
    Component
} from 'react';
import O from '../XO/o';
import Winner from './winner';


class WinnerO extends Component {

    render(){
        return(
            <div className="winnerAlign">
                 <O
                    radius={"50"}
                    width={"230"}
                    height={"230"}
                    strokeWidth={"20"}
                    cx={"115"}
                    cy={"150"}
                    />
                <Winner
                winner={this.props.winner}
                />
            </div>
           
        );
    }
}

export default WinnerO;

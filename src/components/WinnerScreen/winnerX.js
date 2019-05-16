import React,{
    Component
} from 'react';
import X from '../XO/x';
import Winner from './winner';


class WinnerX extends Component {

    render(){
        return(
            <div className="winnerIs">
                 <X screen={true}/>
                <Winner
                winner={this.props.winner}
                />
            </div>
           
        );
    }
}

export default WinnerX;

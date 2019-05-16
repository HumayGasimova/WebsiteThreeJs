import React,{
    Component
} from 'react';
import './xo.scss';

class X extends Component {

    render(){
        return(
            <div className={this.props.screen ? "xScreen" : "x"}>
                <div className="diagonalFirst"/>
                <div className="diagonalSecond"/>
            </div>
        );
    }
}



export default X;

import React,{
    Component
} from 'react';
import './xo.scss';

class O extends Component {

    render(){
        return(
            <svg 
                width={this.props.width} 
                height={this.props.height} 
                xmlns="http://www.w3.org/2000/svg"
                // viewBox="0 0 303 303" 
                >
                <circle className="circle" r={this.props.radius} cy={this.props.cy} cx={this.props.cx} strokeWidth={this.props.strokeWidth} stroke="#F1EBD5" fill="none"/>
            </svg>
        );
    }
}

export default O;

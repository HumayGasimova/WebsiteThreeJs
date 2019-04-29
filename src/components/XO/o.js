import React,{
    Component
} from 'react';
import './xo.scss';

class O extends Component {

    render(){
        return(
            <svg width="150" height="160" xmlns="http://www.w3.org/2000/svg">
                <circle class="circle" r="35" cy="50" cx="50" stroke-width="10" stroke="#F1EBD5" fill="none"/>
            </svg>
        );
    }
}

export default O;

import React,{
    Component
} from 'react';
import './mainBox.scss';
class MainBox extends Component {
    constructor (){
        super();
    }
    
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default MainBox;

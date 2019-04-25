import React,{
    Component
} from 'react';
import './box.scss';

class MainBox extends Component {
    constructor (){
        super();
    }


    // renderDrawBoard = () => {
    //     if(this.props.firstPlayer){
    //         return(
    //             <div>
    //                 {this.props.children}
    //             </div>
    //         )
    //     }
    // }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default MainBox;

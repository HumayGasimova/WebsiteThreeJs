/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './imageSlot.scss';

/**
 * ImageSlot component definition and export
 */

class ImageSlot extends Component {

    /**
    * Constructor
    */

    constructor (){
        super();
        this.state={
            hidden: true
        }
    }
    
    componentDidUpdate = () => {
        setTimeout(()=>{
            this.setState({
                hidden: false
            })
        },this.props.timer)
    }

    /**
    * Markup
    */

    render(){
        return(
            <div id="slot"
                className={this.state.hidden ? "hidden" : `${this.props.slotNumber}`}
            >
                <img src={this.props.image}/>
            </div>
        );
    }
}

export default ImageSlot;

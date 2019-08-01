/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

/**
 * Styles
 */

import './button.scss';

/**
 * Button component definition and export
 */

class Button extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="button">
                <button 
                    onClick={this.props.onClick}
                    type={this.props.type}
                    disabled={this.props.disabled}
                    style={{ width: `${this.props.width}`, height: `${this.props.height}`, borderRadius: `${this.props.borderRadius}`}}
                    >
                        {this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;

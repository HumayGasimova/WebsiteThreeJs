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

import './inputField.scss';

/**
 * WelcomePage component definition and export
 */

class InputField extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state={
            value: ''
        }
    }
    
    handleOnChange = (e) => {
       this.props.getValue(e)
    }

    // handleOnClick = () => {
    //     alert(this.state.value)
    // }

    // keyPressed = (event) => {
    //     if(event.key === 'Enter'){
    //         // this.props.
    //     }
    // }

    /**
    * Markup
    */

    render(){
        return(
            <div className={this.props.style}>
               <input
                    placeholder={this.props.placeholder} 
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.handleOnChange}
                    onKeyPress={this.keyPressed}
                    id={this.props.id}
                    style={{ width: `${this.props.width}`, height: `${this.props.height}`, borderRadius: `${this.props.borderRadius}`}}
                    />
                {/* <button onClick={this.handleOnClick}>Add</button> */}
                <div>{this.state.value}</div>
            </div>
        );
    }
}

export default InputField;

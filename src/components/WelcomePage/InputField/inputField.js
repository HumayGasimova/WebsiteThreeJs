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
    
    handleOnChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    // handleOnClick = () => {
    //     alert(this.state.value)
    // }

    keyPressed = (event) => {
        if(event.key === 'Enter'){
            alert("hey")
        }
    }

    /**
    * Markup
    */

    render(){
        return(
            <div className={this.props.style}>
               <input 
                    placeholder={this.props.placeholder} 
                    type={this.props.type}
                    value={this.state.value}
                    onChange={this.handleOnChange}
                    onKeyPress={this.keyPressed}
                    style={{ width: `${this.props.width}`, height: `${this.props.height}`, borderRadius: `${this.props.borderRadius}`}}
                    />
                {/* <button onClick={this.handleOnClick}>Add</button> */}
                <div>{this.state.value}</div>
            </div>
        );
    }
}

export default InputField;

/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

import InputField from '../InputField/inputField';
import Button from '../Button/button';
import EmptyDivV1 from '../Empty/emptyDivV1';

/**
 * Styles
 */

import './signUp.scss';

/**
 * Login component definition and export
 */

class SignUp extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state={
            showSignUpForm: true,
            name: '',
            lastName: '',
            email: '',
            password: ''
        }
    }
    
    /**
    * Markup
    */

   closeSignUpForm = () => {
       this.setState({
            showSignUpForm: false
       })
   }

   handleOnClick = () => {
    // e.preventDefault();
    console.log(this.state)
   }

   getValue = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
   }

   renderSignUpForm = () => {
       if(this.state.showSignUpForm === true){
           return(
               <form 
                    className="sign-up"
                >
                    <div className="sign-up-child">
                        <div className="sign-up-close-button" onClick={this.closeSignUpForm}>X</div>
                        <div className="sign-up-text">SIGN UP</div>
                        <EmptyDivV1/>
                        <InputField
                            value={this.state.name}
                            placeholder={" Name"}
                            type={"text"}
                            width={"200px"}
                            height={"37px"}
                            borderRadius={"7px"}
                            id={'name'}
                            getValue={(e)=>this.getValue(e)}
                            />
                        <EmptyDivV1/>
                        <InputField
                            value={this.state.lastName}
                            placeholder={" Last Name"}
                            type={"text"}
                            width={"200px"}
                            height={"37px"}
                            borderRadius={"7px"}
                            id={'lastName'}
                            getValue={(e)=>this.getValue(e)}
                            />
                        <EmptyDivV1/>
                        <InputField
                            value={this.state.email}
                            placeholder={" Email"}
                            type={"text"}
                            width={"200px"}
                            height={"37px"}
                            borderRadius={"7px"}
                            id={'email'}
                            getValue={(e)=>this.getValue(e)}
                            />
                        <EmptyDivV1/>   
                        <InputField
                            value={this.state.password}
                            placeholder={" Password"}
                            type={"password"}
                            width={"200px"}
                            height={"37px"}
                            borderRadius={"7px"}
                            id={'password'}
                            getValue={(e)=>this.getValue(e)}
                            />  
                        <EmptyDivV1/>
                        <Button
                            type={"button"}
                            disabled={false}
                            text={"Sign Up"}
                            width={"200px"}
                            height={"37px"}
                            borderRadius={"7px"}
                            getValue={(e)=>this.getValue(e)}
                            onClick={this.handleOnClick}
                            />   

                    </div>
                </form>
           )
       }
   }
    render(){
        return(
            <div>
                {this.renderSignUpForm()}
            </div>
        );
    }
}

export default SignUp;

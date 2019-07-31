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
            showSignUpForm: true
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

   renderSignUpForm = () => {
       if(this.state.showSignUpForm === true){
           return(
               <div className="sign-up">
                    <div className="sign-up-child">
                        <div className="sign-up-close-button" onClick={this.closeSignUpForm}>X</div>
                        <div className="sign-up-text">SIGN UP</div>
                        <EmptyDivV1/>
                        <InputField
                            placeholder={" Name"}
                            type={"text"}
                            width={"200px"}
                            height={"37px"}
                            borderRadius={"7px"}
                            />
                        <EmptyDivV1/>
                        <InputField
                            placeholder={" Surname"}
                            type={"text"}
                            width={"200px"}
                            height={"37px"}
                            borderRadius={"7px"}
                            />
                        <EmptyDivV1/>
                        <InputField
                            placeholder={" Email"}
                            type={"text"}
                            width={"200px"}
                            height={"37px"}
                            borderRadius={"7px"}
                            />
                        <EmptyDivV1/>   
                        <InputField
                            placeholder={" Password"}
                            type={"password"}
                            width={"200px"}
                            height={"37px"}
                            borderRadius={"7px"}
                            />  
                        <EmptyDivV1/>
                        <Button
                            type={"button"}
                            disabled={false}
                            text={"Login"}
                            width={"200px"}
                            height={"37px"}
                            borderRadius={"7px"}
                            />    
                    </div>
                </div>
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

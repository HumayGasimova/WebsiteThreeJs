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

import './login.scss';

/**
 * Login component definition and export
 */

class Login extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state={
            showLoginForm: true
        }
    }
    
    /**
    * Markup
    */

   closeLoginForm = () => {
       this.setState({
           showLoginForm: false
       })
   }

   renderLoginForm = () => {
       if(this.state.showLoginForm === true){
           return(
               <div className="login">
                    <div className="login-child">
                        <div className="close-button" onClick={this.closeLoginForm}>X</div>
                        <div className="login-text">USER AUTHENTICATION</div>
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
                {this.renderLoginForm()}
            </div>
        );
    }
}

export default Login;

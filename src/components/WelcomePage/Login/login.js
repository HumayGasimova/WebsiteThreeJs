/**
 * Libraries
 */

import React,{
    Component
} from 'react';
import {
    connect
 } from 'react-redux';

 import {
    bindActionCreators
 } from 'redux';

/**
 * Components
 */

import Input from '../../../library/Input/input';
import Button from '../../../library/Button/button';
import EmptyDivV1 from '../Empty/emptyDivV1';

/**
 * Styles
 */

import './login.scss';

/**
 * Actions
 */

import * as Actions from '../../../actions';

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
            loginForm: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: ' Your E-Mail'
                    },
                    value: '',
                    validation: [
                        {
                            required: true,
                            valid: "false"
                        },
                        {
                            isEmail: true,
                            valid: "false"
                        }
                    ],
                    validField: "false",
                    touched: "false",
                    errorMessage: []
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: ' Password'
                    },
                    value: '',
                    validation: [
                        {
                            required: true,
                            valid: "false"
                        },
                        {
                            minLength: 8,
                            valid: "false"
                        }
                    ],
                    validField: "false",
                    touched: "false",
                    errorMessage: []
                }
            },
            formIsValid: false
        }
    }
    
    /**
    * Markup
    */

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = { 
            ...updatedLoginForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.validation = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.errorMessage = this.errorMessages(inputIdentifier, updatedFormElement.validation)// {required: "enter valid 'inputIdentifier'"}
        

        updatedFormElement.touched = "true";
        updatedFormElement.validField = this.checkValidityOfField(updatedFormElement.validation);
        updatedLoginForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedLoginForm){
            formIsValid = updatedLoginForm[inputIdentifier].validField === "true" && formIsValid;
        }

        this.setState({
            loginForm: updatedLoginForm,
            formIsValid: formIsValid
        });

    }

    checkValidityOfField = (validation) => {
        let checkIfTrue=[]
        validation.map((el) => {
            checkIfTrue.push(el.valid)
        })

        return checkIfTrue.every(x => x === "true").toString();
    }

    errorMessages = (inputIdentifier, rules) => {
        let errors = []
        if(rules){
            rules.map((rule) => {
                if(rule.required && rule.valid === "false"){
                    errors.push(`Please enter ${inputIdentifier}`)
                }
                if(rule.minLength && rule.valid === "false"){
                    errors.push(`${inputIdentifier.charAt(0).toUpperCase() + inputIdentifier.slice(1)} should be more than 8 charachters!`)
                }
                if(rule.isEmail && rule.valid === "false"){
                    errors.push(`Please enter valid ${inputIdentifier}`)
                }
            })
        }
        return errors;
    }

    checkValidity = (value, rules) => {
        let validation = [];
        if(rules){
            rules.map((rule) => {
                if(rule.required){
                    let isValid = value.trim() !== '' ;
                    validation.push({...rule,valid: isValid.toString()});
                }
                if(rule.minLength){
                    let isValid = value.length >= rule.minLength;
                    validation.push({...rule,valid: isValid.toString()});
                }
                if(rule.maxLength){
                    let isValid = value.length <= rules.maxLength 
                    validation.push({...rule,valid: isValid.toString()});
                }
                if(rule.isEmail){
                    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                    let isValid = pattern.test(value);
                    validation.push({...rule,valid: isValid.toString()});
                }
                if(rule.isNumeric){
                    const pattern = /^\d+$/;
                    let isValid = pattern.test(value);
                    validation.push({...rule,valid: isValid.toString()});
                }
            
            })
        return validation;
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(null, this.state.loginForm.email.value, this.state.loginForm.password.value, this.props.isSignUp);
        // const formData = {};

        // for (let formElementIdentifier in this.state.loginForm) {
        //     formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value
        // }

        // const order = {
        //     orderData: formData
        // }

        // axios.post('/orders.json', order )
        // .then(res=>console.log(res))
        // .catch(err=> console.log(err))
    }

    renderInput = () => {
        const formElementsArray = [];
        for(let key in this.state.loginForm){
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            })
        }
        return(
            <form 
                className="login"
                // onSubmit={this.onSubmitHandler}
            >
                <div className="login-child">
                    <div className="login-close-button" onClick={this.closeSignUpForm}>X</div>
                    <div className="login-text">LOGIN</div>
                    <EmptyDivV1/>
                    {formElementsArray.map((formElement) => {
                        return(
                            <div key={formElement.id}>
                                <Input 
                                    classnameerror={"errors"}
                                    errormessage={formElement.config.errorMessage}
                                    valid={formElement.config.validField}
                                    elementtype={formElement.config.elementType} 
                                    elementconfig={formElement.config.elementConfig}
                                    value={formElement.config.value}
                                    onChange={(event) => this.inputChangedHandler(event, formElement.id)}
                                    shouldvalidate={formElement.config.validation}
                                    className={"input_error"}
                                    touched={formElement.config.touched}
                                />
                                <EmptyDivV1/>
                            </div>
                        )
                    })}
                <Button 
                        className={"button"}
                        text={"Login"}
                        disabled={!this.state.formIsValid}
                        onClick={this.onSubmitHandler}
                    />
                <EmptyDivV1/>
                <Button 
                    className={"button"}
                    text={"Switch to Sign Up"}
                    onClick={this.switch}
                />
                </div>
            </form>
        )
    }

    switch = () => {
        this.props.newUser(true)
    }

    closeSignUpForm = () => {
        this.props.newUser(null)
    }

    render(){
        return(
            <div>
                {this.renderInput()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
        //    loading: state.auth.loading,
        isSignUp: state.auth.isSignUp
        };
     },
    (dispatch) => {
       return {
        onAuth: bindActionCreators(Actions.auth, dispatch),
        newUser: bindActionCreators(Actions.userSignUp, dispatch)
       };
    }
 )(Login);

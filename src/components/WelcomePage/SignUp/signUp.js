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

 import axios from 'axios';

/**
 * Components
 */

import Input from '../../../library/Input/input';
import Button from '../../../library/Button/button';
import EmptyDivV1 from '../Empty/emptyDivV1';

/**
 * Styles
 */

import './signUp.scss';

/**
 * Actions
 */

import * as Actions from '../../../actions';

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
            signUpForm: {
                fullName: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: ' Full Name'
                    },
                    value: '',
                    validation: [
                        {
                            required: true,
                            valid: "false"
                        }
                    ],
                    validField: "false",
                    touched: "false",
                    errorMessage: []
                },
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
    const updatedSignUpForm = {
        ...this.state.signUpForm
    };
    const updatedFormElement = { 
        ...updatedSignUpForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.validation = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.errorMessage = this.errorMessages(inputIdentifier, updatedFormElement.validation)// {required: "enter valid 'inputIdentifier'"}
    

    updatedFormElement.touched = "true";
    updatedFormElement.validField = this.checkValidityOfField(updatedFormElement.validation);
    updatedSignUpForm[inputIdentifier] = updatedFormElement;
   
    // let validField = true;
    // for(let inputIdentifier in updatedSignUpForm){
    //     formIsValid = updatedSignUpForm[inputIdentifier].valid === "true" && formIsValid;
    // }

    let formIsValid = true;
    for(let inputIdentifier in updatedSignUpForm){
        formIsValid = updatedSignUpForm[inputIdentifier].validField === "true" && formIsValid;
    }

    this.setState({
        signUpForm: updatedSignUpForm,
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

        // console.log(errors)
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
        this.props.onAuth(this.state.signUpForm.fullName.value, this.state.signUpForm.email.value, this.state.signUpForm.password.value, this.props.isSignUp);

        // const formData = {};
        // for (let formElementIdentifier in this.state.signUpForm) {
        //     formData[formElementIdentifier] = this.state.signUpForm[formElementIdentifier].value
        // }

        // const order = {
        //     orderData: formData
        // }

        // axios.post('https://tictactoe-8fa18.firebaseio.com/orders.json', order )
        // .then(res=>console.log(res))
        // .catch(err=> console.log(err))
    }

    renderInput = () => {
        const formElementsArray = [];
        for(let key in this.state.signUpForm){
            formElementsArray.push({
                id: key,
                config: this.state.signUpForm[key]
            })
        }

        let errorMessages = null;
        if(this.props.error){
            errorMessages =  (
                 <div>{this.props.error.message}</div>
            );
        }

        console.log(formElementsArray)
        return(
            <form 
                className="sign-up"
                // onSubmit={this.onSubmitHandler}
            >
                {/* {errorMessages} */}
                <div className="sign-up-child">
                    <div className="sign-up-close-button" onClick={this.closeSignUpForm}>X</div>
                    <div className="sign-up-text">SIGN UP</div>
                    <EmptyDivV1/>
                    {formElementsArray.map((formElement) => {
                        // console.log(!formElement.config.valid)
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
                        text={"SIGN UP"}
                        disabled={!this.state.formIsValid}
                        onClick={this.onSubmitHandler}
                    />
                    <EmptyDivV1/>
                     <Button 
                        className={"button"}
                        text={"Switch to Login"}
                        onClick={this.switch}
                    />
                </div>
            </form>
        )
    }

    switch = () => {
       this.props.newUser(false)
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
           loading: state.auth.loading,
           error: state.auth.error,
           isAuthenticated: state.auth.token !== null,
           isSignUp: state.auth.isSignUp
        };
     },
    (dispatch) => {
       return {
        onAuth: bindActionCreators(Actions.auth, dispatch),
        newUser: bindActionCreators(Actions.userSignUp, dispatch)
       };
    }
 )(SignUp);

// export default SignUp;

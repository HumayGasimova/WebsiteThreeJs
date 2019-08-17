/**
 * Libraries
 */

import React,{
    Component
} from 'react';

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
 * Login component definition and export
 */

class Login extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state={
            signUpForm: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: ' Your E-Mail'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: "false",
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
                    validation: {
                        required: true,
                        minLength: 8
                    },
                    valid: "false",
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
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

        updatedFormElement.errorMessage = this.errorMessages(inputIdentifier, updatedFormElement.validation, updatedFormElement.valid)// {required: "enter valid 'inputIdentifier'"}

        updatedFormElement.touched = "true";

        updatedSignUpForm[inputIdentifier] = updatedFormElement;
    // console.log(updatedSignUpForm)
        let formIsValid = true;
        for(let inputIdentifier in updatedSignUpForm){
            formIsValid = updatedSignUpForm[inputIdentifier].valid === "true" && formIsValid;
        }

        this.setState({
            signUpForm: updatedSignUpForm,
            formIsValid: formIsValid
        });

    }

    errorMessages = (inputIdentifier, rules, validity) => {
        let errors = []
        if(rules ){
            debugger
            if(validity === "false" && rules.required ){
                errors.push(`Please enter valid ${inputIdentifier}`)
            }

            // if(validity === "false" && rules.minLength ){
            //     errors.push(`${inputIdentifier} should be more than 8 characters!`)
            // }
        }

        console.log(errors)
        return errors;
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if(rules && rules.required ){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules && rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules && rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid.toString();
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {};

        for (let formElementIdentifier in this.state.signUpForm) {
            formData[formElementIdentifier] = this.state.signUpForm[formElementIdentifier].value
        }

        const order = {
            orderData: formData
        }

        axios.post('/orders.json', order )
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
    }

    renderInput = () => {
        const formElementsArray = [];
        for(let key in this.state.signUpForm){
            formElementsArray.push({
                id: key,
                config: this.state.signUpForm[key]
            })
        }
        // console.log(formElementsArray)
        return(
            <form 
                className="login"
                onSubmit={this.onSubmitHandler}
            >
                <div className="login-child">
                    <div className="login-close-button" onClick={this.closeSignUpForm}>X</div>
                    <div className="login-text">LOGIN</div>
                    <EmptyDivV1/>
                    {formElementsArray.map((formElement) => {
                        // console.log(!formElement.config.valid)
                        return(
                            <div key={formElement.id}>
                                <Input 
                                    classnameerror={"error"}
                                    errormessage={formElement.config.errorMessage}
                                    valid={formElement.config.valid}
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
                    />
                </div>
            </form>
        )
    }
    render(){
        return(
            <div>
                {this.renderInput()}
                {console.log(this.state.signUpForm)}
            </div>
        );
    }
}

export default Login;

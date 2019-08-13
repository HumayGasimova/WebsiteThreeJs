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
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: ' Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: "false",
                    touched: "false",
                    errorMessage: "Please enter name!"
                },
                lastName: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: ' Last Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: "false",
                    touched: "false",
                    errorMessage: "Please enter street!"
                },
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
                    errorMessage: "Please enter valid email!"
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
                    errorMessage: "Password should be more than 8 characters!"
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
    updatedFormElement.touched = "true";

    updatedSignUpForm[inputIdentifier] = updatedFormElement;
   console.log(updatedSignUpForm)
    let formIsValid = true;
    for(let inputIdentifier in updatedSignUpForm){
        formIsValid = updatedSignUpForm[inputIdentifier].valid === "true" && formIsValid;
    }

    this.setState({
        signUpForm: updatedSignUpForm,
        formIsValid: formIsValid
    });

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
    console.log(formElementsArray)
    return(
        <form 
            className="sign-up"
            onSubmit={this.onSubmitHandler}
        >
            <div className="sign-up-child">
                <div className="sign-up-close-button" onClick={this.closeSignUpForm}>X</div>
                <div className="sign-up-text">SIGN UP</div>
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
                    text={"SIGN UP"}
                    disabled={!this.state.formIsValid}
                />
            </div>
        </form>
    )
        
    

}












//    closeSignUpForm = () => {
//        this.setState({
//             showSignUpForm: false
//        })
//    }

//    handleOnClick = () => {
//         let signUpData = {
//             name: this.state.name,
//             lastName: this.state.lastName,
//             email: this.state.emai,
//             password: this.state.password

//         }

//         this.props.userSignUpRequest(signUpData)
//     }

//    getValue = (e) => {
//        this.setState({
//            [e.target.id]: e.target.value
//        })
//    }

//    renderSignUpForm = () => {
//        if(this.state.showSignUpForm === true){
//            return(
//                <form 
//                     className="sign-up"
//                 >
//                     <div className="sign-up-child">
//                         <div className="sign-up-close-button" onClick={this.closeSignUpForm}>X</div>
//                         <div className="sign-up-text">SIGN UP</div>
//                         <EmptyDivV1/>
//                         <InputField
//                             value={this.state.name}
//                             placeholder={" Name"}
//                             type={"text"}
//                             width={"200px"}
//                             height={"37px"}
//                             borderRadius={"7px"}
//                             id={'name'}
//                             getValue={(e)=>this.getValue(e)}
//                             />
//                         <EmptyDivV1/>
//                         <InputField
//                             value={this.state.lastName}
//                             placeholder={" Last Name"}
//                             type={"text"}
//                             width={"200px"}
//                             height={"37px"}
//                             borderRadius={"7px"}
//                             id={'lastName'}
//                             getValue={(e)=>this.getValue(e)}
//                             />
//                         <EmptyDivV1/>
//                         <InputField
//                             value={this.state.email}
//                             placeholder={" Email"}
//                             type={"text"}
//                             width={"200px"}
//                             height={"37px"}
//                             borderRadius={"7px"}
//                             id={'email'}
//                             getValue={(e)=>this.getValue(e)}
//                             />
//                         <EmptyDivV1/>   
//                         <InputField
//                             value={this.state.password}
//                             placeholder={" Password"}
//                             type={"password"}
//                             width={"200px"}
//                             height={"37px"}
//                             borderRadius={"7px"}
//                             id={'password'}
//                             getValue={(e)=>this.getValue(e)}
//                             />  
//                         <EmptyDivV1/>
//                         <Button
//                             type={"button"}
//                             disabled={false}
//                             text={"Sign Up"}
//                             width={"200px"}
//                             height={"37px"}
//                             borderRadius={"7px"}
//                             getValue={(e)=>this.getValue(e)}
//                             onClick={this.handleOnClick}
//                             />   

//                     </div>
//                 </form>
//            )
//        }
//    }
    render(){
        return(
            <div>
                {this.renderInput()}
            </div>
        );
    }
}
 
export default connect(
 null,
    (dispatch) => {
       return {
          userSignUpRequest: bindActionCreators(Actions.userSignUpRequest, dispatch),
       };
    }
 )(SignUp);

// export default SignUp;

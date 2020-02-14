/**
* Libraries
*/

import React, {
    useState
} from 'react';

/**
* Styles
*/

import './comment.scss';

/**
* Components
*/

import Button from '../../../library/Button/button';
import Input from '../../../library/Input/input';

/**
* Images
*/

import Img1 from '../../../images/Portrait_Placeholder.png';

/**
* Comment component definition and export
*/

export const Comment = (props) => {

    /**
    * State
    */

    const [replyInput, setReplyInput] = useState(
        {
            id: 1,
            inputFieldName: "Comment",
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'add comment'
            },
            value: '',
            validation: [],
            validField: false,
            touched: false,
            errorMessage: [],
            type: "text",
            inputID: 'comment'
        }
    )

    /**
    * Methods
    */

    const handleOnClick = () => {
        props.addComment(replyInput.value);
        setReplyInput({...replyInput, value: '', validField: false});
        clearInputValue("comment");    
    }

    const clearInputValue = (fieldId) => {
        document.getElementById(fieldId).value = '';
    }

    const onChangeHandler = (e) => {
        let inputField = {
            ...replyInput, 
            value: e.target.value,
            // validation: Utility.checkValidity(e.target.value, inputField.validation),
            // touched: true
        };

        inputField = {
            ...inputField, 
            validField: inputField.value !== '' ? true : false
            // errorMessage: Utility.errorMessages(replyInput.inputFieldName, replyInput.validation),
            // validField: Utility.checkValidityOfField(replyInput.validation),
        }
   
        setReplyInput(inputField);
    }

    const loadImage = (img) => {
        switch(img){
            case 'Name1':
            return Img1;
        }
    }

    const renderInput = () => {
        return(
            <div className="comment-wrapper-input">
                <Input
                    className="add-comment-input"
                    onChange={() => onChangeHandler(event)}
                    elementType={replyInput.elementType}
                    validField={replyInput.validField}
                    inputID={replyInput.inputID}
                />
                <Button 
                    className="comment-button-input"
                    text={"OK"}
                    onClick={handleOnClick}
                    disabled={!replyInput.validField}
                />
            </div>
        )
    }
    
    /**
    * Markup
    */

    return(
        <div className="comment">
            <div className="comment-image">
                <img src={loadImage(props.image)}/>
            </div>
            <div className="comment-wrapper">
                <div className="comment-full-name">{props.fullName}</div>
                <div className="comment-date">{props.date}</div>
                <div className="comment-text">{props.comment}</div>
                {props.inputIsShown ? 
                    renderInput() : 
                    <Button 
                        className="comment-button"
                        text={"Reply"}
                        onClick={props.onClick}
                        disabled={props.fullName === "Name3"}
                    />}
            </div>
        </div>
    );
}

export default Comment;
 
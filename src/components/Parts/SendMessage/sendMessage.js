/**
* Libraries
*/

import React, {
    useState
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

import Button from '../../../library/Button/button';

/**
* Styles
*/

import './sendMessage.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* SendMessage component definition and export
*/

export const SendMessage = (props) => {

    /**
    * State
    */

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    /**
    * Methods
    */

    const handleOnInputChange = (e, field) => {
        switch(field){
            case 'name':
                return setName(e.target.value);
            case 'email':
                return setEmail(e.target.value);
            case 'contact':
                return setContact(e.target.value);
            case 'company':
                return setCompany(e.target.value);
            case 'message':
                return setMessage(e.target.value);
        }
    }
   
    /**
    * Markup
    */

    return(
        <div className="sendMessage">
            <div className="sendMessage-wrapper">
                <input placeholder="Full Name" onChange={() => handleOnInputChange(event, "name")}/>
                <input placeholder="Email" onChange={() => handleOnInputChange(event, "email")}/>
                <input placeholder="Contact" onChange={() => handleOnInputChange(event, "contact")}/>
                <input placeholder="Company" onChange={() => handleOnInputChange(event, "company")}/>
            </div>
            <textarea placeholder="Your Message" rows="2" onChange={() => handleOnInputChange(event, "message")}></textarea>
            <Button 
                className={"sendMessage-submit"}
                outerDivClassName={"sendMessage-outerDiv-submit"}
                onClick={() => props.submitMessage(name, email, contact, company, message)}
                text={"Submit"}
            />
        </div>
    );
}

export default connect(
    (state) => {
        return {
            images: Selectors.getImagesState(state)
        };
    },
    (dispatch) => {
        return {
            submitMessage: bindActionCreators(Actions.submitMessage, dispatch)
        };
    }
)(SendMessage);
 
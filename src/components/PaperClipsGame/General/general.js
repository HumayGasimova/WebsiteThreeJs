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

import Button from '../../../library/Button/button';

/**
* Styles
*/

import './general.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* General component definition and export
*/

class General extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
     * Methods
     */

    makePaperclip = () => {
        this.props.makePaperclip();
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="general">
               <div className="general-text"> Paperclips : {this.props.paperClips} </div>
                <Button 
                    onClick={this.makePaperclip}
                    text={"Make Paperclip"}
                />
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: state.general.paperClips
        };
    },
    (dispatch) => {
        return {
            makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch)
        };
    }
)(General);

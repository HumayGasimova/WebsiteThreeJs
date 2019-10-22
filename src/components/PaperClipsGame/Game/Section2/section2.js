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

import ComputationalResources from '../../Parts/ComputationalResources/computationalResources';
import Projects from '../../Parts/Projects/projects';

/**
* Styles
*/

import './section2.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Section2 component definition and export
*/

export class Section2 extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }
    
    /**
    * Methods
    */

    renderSection2 = () => {
        if(this.props.paperClips >= 2000){
        // if(this.props.paperClips){
            return(
                <div>
                    <ComputationalResources/>
                    <Projects/> 
                </div>
            )
        }
    } 

    /**
    * Markup
    */

    render(){
        return(
            <div 
                className="section2"
                // onClick={this.props.closeDropdowns}
            >
                {this.renderSection2()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: Selectors.getPaperclipsState(state),
        };
    },
    (dispatch) => {
        return {
            closeDropdowns: bindActionCreators(Actions.closeDropdowns, dispatch)
        };
    }
)(Section2);

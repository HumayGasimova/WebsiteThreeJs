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
* Styles
*/

import './chip.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Chip component definition and export
*/

class Chip extends Component {

    /**
    * Methods
    */

    componentDidUpdate(prevProps) {
        if (prevProps.qOps !== this.props.qOps) {
            if(this.props.qOps === 360){
                // debugger
                this.props.stopAddingQOps();
                this.props.startSubtractingQOps(this.props.chipsNumber);
            }
            if(this.props.qOps === -360){
                this.props.stopSubtractingQOps();
                this.props.startAddingQOps(this.props.chipsNumber);
            }
        }      
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div>
                {this.props.showChip ? <div className="chip"/> : null}
            </div>
        );
    }
}

export default connect(
  null,
    (dispatch) => {
        return {
            stopAddingQOps: bindActionCreators(Actions.stopAddingQOps, dispatch),
            startSubtractingQOps: bindActionCreators(Actions.startSubtractingQOps, dispatch),
            stopSubtractingQOps: bindActionCreators(Actions.stopSubtractingQOps, dispatch),
            startAddingQOps: bindActionCreators(Actions.startAddingQOps, dispatch),
        };
    }
)(Chip);

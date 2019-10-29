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


/**
* Styles
*/

import './strategicModelingRight.scss';

/**
* Actions
*/

import * as Actions from '../../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../../reducers/selectors';

/**
* StrategicModelingRight component definition and export
*/

export class StrategicModelingRight extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state = {}
        
    }

    /**
    * Methods
    */


    
    /**
    * Markup
    */

    render(){
        return(
            <div className="strategicModelingRight">
                <div className="strategicModelingRight-first-line-player-1">
                    player 1 
                </div>
                <div className="strategicModelingRight-second-line">
                    <div className="strategicModelingRight-player-2">
                        player 2 
                    </div>
                    <div className="strategicModelingRight-table">
                        <div className="strategicModelingRight-column">
                            <div className="strategicModelingRight-row"></div>
                            <div className="strategicModelingRight-row">{this.props.strategicModelingData.moveA}</div>
                            <div className="strategicModelingRight-row">{this.props.strategicModelingData.moveB}</div>
                        </div>
                        <div className="strategicModelingRight-column">
                            <div className="strategicModelingRight-row">{this.props.strategicModelingData.moveA}</div>
                            <div className="strategicModelingRight-row">{this.props.strategicModelingData.cell1}</div>
                            <div className="strategicModelingRight-row">{this.props.strategicModelingData.cell2}</div>
                        </div>
                        <div className="strategicModelingRight-column">
                            <div className="strategicModelingRight-row">{this.props.strategicModelingData.moveB}</div>
                            <div className="strategicModelingRight-row">{this.props.strategicModelingData.cell3}</div>
                            <div className="strategicModelingRight-row">{this.props.strategicModelingData.cell4}</div>
                        </div>
                    </div>
                </div>
                    
                
            </div>


            // <div className="strategicModelingRight">
            //     <div className="strategicModelingRight-row">
            //         <div className="strategicModelingRight-column-header"></div>
            //         <div className="strategicModelingRight-column-header">{this.props.strategicModelingData.moveA}</div>
            //         <div className="strategicModelingRight-column-header">{this.props.strategicModelingData.moveB}</div>
            //     </div>
            //     <div className="strategicModelingRight-row">
            //         <div className="strategicModelingRight-column-header">
            //             <div className="strategicModelingRight-column-header-left">
            //                 {this.props.strategicModelingData.moveA}
            //             </div>
            //         </div>
            //         <div className="strategicModelingRight-cell-1">{this.props.strategicModelingData.cell1}</div>
            //         <div className="strategicModelingRight-cell-2">{this.props.strategicModelingData.cell2}</div>
            //     </div>
            //     <div className="strategicModelingRight-row">
            //         <div className="strategicModelingRight-column-header">
            //             <div className="strategicModelingRight-column-header-left">
            //                 {this.props.strategicModelingData.moveB}
            //             </div>
            //         </div>
            //         <div className="strategicModelingRight-cell-3">{this.props.strategicModelingData.cell3}</div>
            //         <div className="strategicModelingRight-cell-4">{this.props.strategicModelingData.cell4}</div>
            //     </div>
            // </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            strategicModelingData: Selectors.getStrategicModelingDataState(state),
            // showDropdownStrategicModeling: Selectors.getShowDropdownStrategicModelingState(state),
            // chosenListDropdown: Selectors.getChosenListDropdownState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleDropdownStrategicModeling: bindActionCreators(Actions.toggleDropdownStrategicModeling, dispatch),
        };
    }
)(StrategicModelingRight);

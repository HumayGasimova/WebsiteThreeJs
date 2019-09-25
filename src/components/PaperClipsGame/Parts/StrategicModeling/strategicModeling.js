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

import Button from '../../../../library/Button/button';
import Grid from '../../SmallParts/Grid/grid';
import Dropdown from '../../SmallParts/Dropdown/dropdown';
import Backdrop from '../../SmallParts/Backdrop/backdrop';

/**
* Styles
*/

import './strategicModeling.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* StrategicModeling component definition and export
*/

class StrategicModeling extends Component {

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

    renderGrid = () => {
        // if(true){
        //     return(
        //         <div>
        //             {this.state.example.map((el,i) => {
        //                 return(
        //                     <Grid
        //                         key={i}
        //                         className={`grid-line${i}`}
        //                         stock={el.stock}
        //                         amt={el.amt}
        //                         price={el.price}
        //                         total={el.total}
        //                         pl={el.pl}    
        //                     />
        //                 )
        //             })}
        //         </div>
        //     )
        // }
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="strategicModeling">
                <div className="strategicModeling-box">
                    <div className="strategicModeling-wrapper1">
                        <div className="strategicModeling-label">Strategic Modeling</div>
                        <Dropdown 
                            list={this.props.listStrategicModeling}
                            dropdownClassName={"dropdown-strategicModeling"}
                            dropdownTopClassName={"dropdown-top-strategicModeling"}
                            dropdownTopActiveClassName={"dropdown-top-active-strategicModeling"}
                            dropdownBottomClassName={"dropdown-bottom-strategicModeling"}
                            dropdownTopTextClassName={"dropdown-top-text-strategicModeling"}
                            toggleDropdown={this.props.toggleDropdownStrategicModeling}
                            showDropdown={this.props.showDropdownStrategicModeling}
                        />
                        <Button
                            className="strategicModeling-button-run"
                            // onClick={this.props.lowerPrice}
                            text={"Run"}
                        />
                    </div>
                    <div>Pick strategy, run tournament, gain yomi</div>
                    <div className="strategicModeling-wrapper1">
                        
                    </div>
                   
                </div>
                <div>
                    <div className="strategicModeling-wrapper3">
                        <Button
                            className="strategicModeling-button"
                            // onClick={this.props.raisePrice}
                            text={"New Tournament"}
                        />
                        <div>Cost: 1000 Yomi</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            listStrategicModeling: state.business.listStrategicModeling,
            showDropdownStrategicModeling: state.business.showDropdownStrategicModeling,
            // unsoldInventory: state.business.unsoldInventory,
            // paperclipPrice: state.business.paperclipPrice,
            // delay: state.business.delay,
            // wire: state.business.wire,
            // makePaperclipDisabled: state.business.makePaperclipDisabled
        };
    },
    (dispatch) => {
        return {
            toggleDropdownStrategicModeling: bindActionCreators(Actions.toggleDropdownStrategicModeling, dispatch),
        };
    }
)(StrategicModeling);

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
                        />
                    </div>
                    <div className="strategicModeling-wrapper1">
                        <div className="strategicModeling-part1">
                            <Button
                                className="strategicModeling-button"
                                // onClick={this.props.lowerPrice}
                                text={"Deposit"}
                            />
                            <Button
                                className="strategicModeling-button"
                                // onClick={this.props.raisePrice}
                                text={"Withdraw"}
                            />
                        </div>
                        <div className="strategicModeling-part2">
                            <div>Cash: $0</div>
                            <div>Stocks: $0</div>
                            <div>Total: $0</div>
                        </div>
                    </div>
                    <div className="strategicModeling-wrapper2">
                        <div className="strategicModeling-part3">
                            <div>Stock</div>
                            <div>Amt.</div>
                            <div>Price</div>
                            <div>Total</div>
                            <div>P/L</div>
                        </div>
                        <div>
                            {this.renderGrid()}
                        </div>
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
            // funds: state.business.funds,
            // unsoldInventory: state.business.unsoldInventory,
            // paperclipPrice: state.business.paperclipPrice,
            // delay: state.business.delay,
            // wire: state.business.wire,
            // makePaperclipDisabled: state.business.makePaperclipDisabled
        };
    },
    (dispatch) => {
        return {
            // makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(StrategicModeling);

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

import './investments.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Utility
*/

import * as Utility from '../../../../utility';

/**
* Investments component definition and export
*/

class Investments extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state = {
            example: [
                {
                    stock: 100,
                    amt: 100,
                    price: 100,
                    total: 100,
                    pl: 100
                },
                {
                    stock: 100,
                    amt: 100,
                    price: 100,
                    total: 100,
                    pl: 100
                },
                {
                    stock: 100,
                    amt: 100,
                    price: 100,
                    total: 100,
                    pl: 100
                },
                {
                    stock: 100,
                    amt: 100,
                    price: 100,
                    total: 100,
                    pl: 100
                },
                {
                    stock: 100,
                    amt: 100,
                    price: 100,
                    total: 100,
                    pl: 100
                }
            ],
            line: {
                stock: "",
                amt: 0,
                price: 0,
                total: 0,
                profitLoss: 0
            }
        }
    }

    /**
     * Methods
     */

    // componentDidMount = () => {
    //     this.intervalOperations = setInterval(()=>{
    //         if(this.props.ops < this.props.opsMax){
    //             this.props.increaseOps()
    //         }
    //     }, this.state.delayOperations);
    // }

    renderGrid = () => {
        if(true){
            return(
                <div>
                    {this.state.example.map((el,i) => {
                        return(
                            <Grid
                                key={i}
                                className={`grid-line${i}`}
                                stock={el.stock}
                                amt={el.amt}
                                price={el.price}
                                total={el.total}
                                pl={el.pl}    
                            />
                        )
                    })}
                </div>
            )
        }
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="investments">
                <div className="investments-box">
                    <div className="investments-wrapper1">
                        <div className="investments-label">Investments</div>
                        <Dropdown 
                            list={this.props.listInvestments}
                            dropdownClassName={"dropdown-investments"}
                            dropdownTopClassName={"dropdown-top-investments"}
                            dropdownTopActiveClassName={"dropdown-top-active-investments"}
                            dropdownBottomClassName={"dropdown-bottom-investments"}
                            dropdownTopTextClassName={"dropdown-top-text-investments"}
                            toggleDropdown={this.props.toggleDropdownInvestments}
                            showDropdown={this.props.showDropdownInvestments}
                        />
                    </div>
                    <div className="investments-wrapper1">
                        <div className="investments-part1">
                            <Button
                                className="investments-button"
                                onClick={this.props.startInvestments}
                                text={"Deposit"}
                            />
                            <Button
                                className="investments-button"
                                // onClick={this.props.raisePrice}
                                text={"Withdraw"}
                            />
                        </div>
                        <div className="investments-part2">
                            <div>Cash: $ {Utility.commaSeparator(this.props.cash)}</div>
                            <div>Stocks: $0</div>
                            <div>Total: $0</div>
                        </div>
                    </div>
                    <div className="investments-wrapper2">
                        <div className="investments-part3">
                            <div>Stock</div>
                            <div>Amt.</div>
                            <div>Price</div>
                            <div>Total</div>
                            <div>P/L</div>
                        </div>
                        <div className="investments-part4">
                            {this.renderGrid()}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="investments-wrapper3">
                        <Button
                            // onClick={this.props.raisePrice}
                            text={"Upgrade Investment Engine"}
                        />
                        <div>Level: 0</div>
                    </div>
                    <div>Cost: 1000 Yomi</div>
                </div>
                {/* {this.props.showDropdownInvestments ? <Backdrop 
                                                        closeDropdowns={this.props.closeDropdowns}
                                                        className="backdrop-investments"/> : null} */}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            listInvestments: state.business.listInvestments,
            showDropdownInvestments: state.business.showDropdownInvestments,
            cash: state.business.cash,
            // paperclipPrice: state.business.paperclipPrice,
            // delay: state.business.delay,
            // wire: state.business.wire,
            // makePaperclipDisabled: state.business.makePaperclipDisabled
        };
    },
    (dispatch) => {
        return {
            toggleDropdownInvestments: bindActionCreators(Actions.toggleDropdownInvestments, dispatch),
            closeDropdowns: bindActionCreators(Actions.closeDropdowns, dispatch),
            startInvestments: bindActionCreators(Actions.startInvestments, dispatch),
        };
    }
)(Investments);

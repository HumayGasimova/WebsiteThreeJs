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
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Utility
*/

import * as Utility from '../../../../utility';

/**
* Investments component definition and export
*/

export class Investments extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
     * Methods
     */

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.investmentsCash !== this.props.investmentsCash || prevProps.investmentsStocks !== this.props.investmentsStocks) {
            if(this.props.investmentsCash === 0 && this.props.investmentsTotal === 0 && this.props.investmentsStocks === 0){
                this.props.stopUpdatingScreen();
            }
        }
    }

    renderGrid = () => {
        // if(true){
            return(
                <div>
                    {this.props.investmentsLines.map((el,i) => {
                        return(
                            <Grid
                                key={i}
                                className={`grid-line${i}`}
                                stock={el.stock}
                                amt={el.amt}
                                price={el.price}
                                total={el.total}
                                profitLoss={el.profitLoss}    
                            />
                        )
                    })}
                </div>
            )
        // }
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
                            chosenListDropdown={this.props.chosenListDropdown[0]}
                            elementsIndexInArray={0}
                        />
                    </div>
                    <div className="investments-wrapper1">
                        <div className="investments-part1">
                            <Button
                                className="investments-button"
                                onClick={this.props.startInvestmentsDeposit}
                                text={"Deposit"}
                            />
                            <Button
                                className="investments-button"
                                onClick={this.props.startInvestmentsWithdraw}
                                text={"Withdraw"}
                            />
                        </div>
                        <div className="investments-part2">
                            <div>Cash: $ {Utility.commaSeparator(this.props.investmentsCash)}</div>
                            <div>Stocks: $ {Utility.commaSeparator(this.props.investmentsStocks)}</div>
                            <div>Total: $ {Utility.commaSeparator(this.props.investmentsTotal)}</div>
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
            listInvestments: Selectors.getListInvestmentsState(state),
            showDropdownInvestments: state.business.showDropdownInvestments,
            investmentsCash: state.business.investmentsCash,
            investmentsTotal: state.business.investmentsTotal,
            investmentsStocks: state.business.investmentsStocks,
            investmentsLines: state.business.investmentsLines,
            chosenListDropdown: state.business.chosenListDropdown
        };
    },
    (dispatch) => {
        return {
            toggleDropdownInvestments: bindActionCreators(Actions.toggleDropdownInvestments, dispatch),
            closeDropdowns: bindActionCreators(Actions.closeDropdowns, dispatch),
            startInvestmentsDeposit: bindActionCreators(Actions.startInvestmentsDeposit, dispatch),
            startInvestmentsWithdraw: bindActionCreators(Actions.startInvestmentsWithdraw, dispatch),
            stopUpdatingScreen: bindActionCreators(Actions.stopUpdatingScreen, dispatch),
        };
    }
)(Investments);

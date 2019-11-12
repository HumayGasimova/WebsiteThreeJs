/**
* Libraries
*/

import React,{
    Component
} from 'react';

import {
    connect
} from 'react-redux';

/**
* Styles
*/

import './strategicModelingRight.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../../reducers/selectors';

/**
* StrategicModelingRight component definition and export
*/

export class StrategicModelingRight extends Component {

    /**
    * Markup
    */

    render(){
        return(
            <div className="strategicModelingRight">
                <div className={this.props.roundAndPlayersIsShown ? "strategicModelingRight-first-line-player-1" : "strategicModelingRight-first-line-player-1 white"}>
                    {this.props.playerTopStrategyList[0]}
                </div>
                <div className="strategicModelingRight-second-line">
                    <div className={this.props.roundAndPlayersIsShown ? "strategicModelingRight-player-2" : "strategicModelingRight-player-2 white"}>
                    {this.props.playerLeftStrategyList[0]}
                    </div>
                    <div className="strategicModelingRight-table">
                        <div className="strategicModelingRight-column left">
                            <div className="strategicModelingRight-row-header">{this.props.strategicModelingData.moveA}</div>
                            <div className="strategicModelingRight-row-header">{this.props.strategicModelingData.moveB}</div>
                        </div>
                        <div className="strategicModelingRight-column">
                            <div className="strategicModelingRight-row-header">{this.props.strategicModelingData.moveA}</div>
                            <div className={this.props.cellIsDark.cell1 ? "strategicModelingRight-row-cell-1 dark" : "strategicModelingRight-row-cell-1"}>{this.props.strategicModelingData.cell1}</div>
                            <div className={this.props.cellIsDark.cell2 ? "strategicModelingRight-row-cell-2 dark" : "strategicModelingRight-row-cell-2"}>{this.props.strategicModelingData.cell2}</div>
                        </div>
                        <div className="strategicModelingRight-column">
                            <div className="strategicModelingRight-row-header">{this.props.strategicModelingData.moveB}</div>
                            <div className={this.props.cellIsDark.cell3 ? "strategicModelingRight-row-cell-3 dark" : "strategicModelingRight-row-cell-3"}>{this.props.strategicModelingData.cell3}</div>
                            <div className={this.props.cellIsDark.cell4 ? "strategicModelingRight-row-cell-4 dark" : "strategicModelingRight-row-cell-4"}>{this.props.strategicModelingData.cell4}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            strategicModelingData: Selectors.getStrategicModelingDataState(state),
            roundAndPlayersIsShown: Selectors.getRoundAndPlayersIsShownState(state),
            playerLeftStrategyList: Selectors.getPlayerLeftStrategyListState(state),
            playerTopStrategyList: Selectors.getPlayerTopStrategyListState(state),
            cellIsDark: Selectors.getCellIsDarkState(state)
        };
    }
)(StrategicModelingRight);

/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* Styles
*/

import './grid.scss';

/**
* Grid component definition and export
*/

class Grid extends Component {
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="grid-row">
                <div className={this.props.className}>{this.props.stock}</div>
                <div className={this.props.className}>{this.props.amt}</div>
                <div className={this.props.className}>{this.props.price}</div>
                <div className={this.props.className}>{this.props.total}</div>
                <div className={this.props.className}>{this.props.profitLoss}</div>
            </div>
        );
    }
}

export default Grid;

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

import './dropdown.scss';

/**
* Images
*/

import Arrow from '../../../../images/arrow__triangle-small-2-01-512.png';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Grid component definition and export
*/

class Dropdown extends Component {

    /**
    * Methods
    */

    handleOnClick = (i, el) => {
        this.props.chooseFromDropdown(el, this.props.elementsIndexInArray);
    }

    /**
    * Methods
    */
    
   renderDropdown = () => {
       return(
           <div className={this.props.dropdownBottomClassName}>
               {this.props.list.map((el,i) => {
                   return(
                        <div 
                            onClick={() =>this.handleOnClick(i, el)}
                            key={i}
                        >
                            {el}
                        </div>
                   )
               })}
           </div>
       )
   }

    /**
    * Markup
    */

    render(){
        return(
            <div className={this.props.dropdownClassName}>
                <div 
                    className={this.props.showDropdown ? this.props.dropdownTopActiveClassName : this.props.dropdownTopClassName}
                    onClick={()=>{this.props.toggleDropdown()}}
                >
                    <div className={this.props.dropdownTopTextClassName}> 
                        {this.props.chosenListDropdown}
                    </div>
                    <div>
                        <img src={Arrow} alt="arrow"/>
                    </div>
                </div>
                {this.props.showDropdown ? this.renderDropdown() : null}
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => {
        return {
            chooseFromDropdown: bindActionCreators(Actions.chooseFromDropdown, dispatch)
        };
    }
)(Dropdown);

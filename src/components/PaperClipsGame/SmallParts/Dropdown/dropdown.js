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
    * Constructor
    */

    constructor (props){
        super(props);
        this.state = {
            showDropdown: false
        }
    }

    /**
    * Methods
    */
    
   renderDropdown = () => {
       return(
           <div className="dropdown-bottom">
               {this.props.list.map((el,i) => {
                   return(
                        <div key={i}>
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
            <div className="dropdown">
                <div 
                    className={this.state.showDropdown ? "dropdown-top-active" :"dropdown-top"}
                    onClick={()=>{this.setState({showDropdown: !this.state.showDropdown})}}
                >
                    <div className="dropdown-top-text"> Low Risk
                    </div>
                    <div>
                        <img src={Arrow} alt="arrow"/>
                    </div>
                </div>
                {this.state.showDropdown ? this.renderDropdown() : null}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // ops: state.business.ops,
            // creativity: state.business.creativity,
            // unsoldInventory: state.business.unsoldInventory,
            // paperclipPrice: state.business.paperclipPrice,
            // delay: state.business.delay
        };
    },
    (dispatch) => {
        return {
            // checkCardValidity: bindActionCreators(Actions.checkCardValidity, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Dropdown);

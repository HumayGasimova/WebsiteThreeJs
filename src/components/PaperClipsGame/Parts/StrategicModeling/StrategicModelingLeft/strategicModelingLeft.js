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

import './strategicModelingLeft.scss';

/**
* Selectors
*/

import * as Selectors from '../../../../../reducers/selectors';

/**
* StrategicModelingLeft component definition and export
*/

export class StrategicModelingLeft extends Component {

    /**
    * Methods
    */

    renderList = () => {
        return(
            <div className="strategicModelingLeft">
                {this.props.showStrategicModelingCurrentList.map((el, i)=>{
                    return(
                        <div key={i} className={el.chosen ? "strategicModelingLeft-list-bold" : "strategicModelingLeft-list"}>
                            {i+1}. {el.strategy}: {el.val}
                        </div>
                    )})
                }
            </div>  
        )
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            showStrategicModelingCurrentList: Selectors.getShowStrategicModelingCurrentListState(state)
           
        };
    }
)(StrategicModelingLeft);

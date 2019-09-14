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

import Card from '../../SmallParts/Card/card';

/**
* Styles
*/

import './projects.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Projects component definition and export
*/

class Projects extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    handleOnClick = (i) => {

    }

    /**
    * Methods
    */

    renderCards = () => {
        return(
            <div>
                {this.props.cards.map((el,i)=>{
                    return(
                        <Card
                            key={i}
                            onClick={() => {this.handleOnClick(i)}}
                            valid={el.valid}
                        >
                            <div>{el.text1}</div>
                            <div>{el.text2}</div>
                            {el.text3 ? <div>{el.text3}</div> : null}
                        </Card>
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
            <div className="projects">
                <div className="projects-label">Projects</div>
                <div className="projects-line"/>
                {this.renderCards()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            cards: state.business.cards,
            // funds: state.business.funds,
            // unsoldInventory: state.business.unsoldInventory,
            // paperclipPrice: state.business.paperclipPrice,
            // delay: state.business.delay
        };
    },
    (dispatch) => {
        return {
            // makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Projects);

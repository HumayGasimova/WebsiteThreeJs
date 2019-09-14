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
import { EWOULDBLOCK } from 'constants';

/**
* Projects component definition and export
*/

class Projects extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state = {
            card1:  {
                text1: "Improved AutoClippers (750 ops)",
                text2 : "Increases AutoClipper performance 25%",
                price: 10,
                action: 25,
                next: '',
                valid: false,
                id: "card1"
            },
            card2: {
                text1: "Improved Wire Extrusion (1,750 ops)",
                text2 : "50% more wire supply from every spool",
                price: 5,
                action: 50,
                next: '',
                valid: false,
                id: "card2"
            },
            card3: {
                text1: "RecTracker (500 ops)",
                text2 : "Automatically calculates average revenue",
                text3 : "per second",
                price: 3,
                action: 50,
                next: '',
                valid: false,
                id: "card3"
            }
        }
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
                            key={el.id}
                            onClick={() => {this.handleOnClick(i)}}
                            valid={el.valid}
                            price={el.price}
                            id={el.id}
                            action={el.action}
                            i={i}
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

    componentWillMount = () => {
        this.props.initProjects(this.state.card1, this.state.card2, this.state.card3)
    }

    // addProject1 = () => {
    //     const pr = {
    //         text1: "dfgvdf",
    //         text2 : "dgdaf",
    //         text3 : "dfagdr",
    //         price: 3,
    //         action: 50,
    //         next: '',
    //         valid: false,
    //         id: "card4"
    //     }
    //     this.props.addProject();
    // }

    
    /**
    * Markup
    */

    render(){
        return(
            <div className="projects">
                <div className="projects-label">Projects</div>
                <div className="projects-line"/>
                {this.renderCards()}
                {console.log(this.props.cards[0].valid)}
                {console.log(this.props.cards[1].valid)}
                {console.log(this.props.cards[2].valid)}
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
            initProjects: bindActionCreators(Actions.initProjects, dispatch),
            addProject: bindActionCreators(Actions.addProject, dispatch)
        };
    }
)(Projects);

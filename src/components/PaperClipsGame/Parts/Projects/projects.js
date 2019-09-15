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
* Const
*/

import * as projects from '../../../../constants/projects';

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
                price: {
                    ops: 5
                },
                action: 25,
                next: 'AutoClippers25',
                valid: false,
                id: "card1",
                terminal: "AutoClippper performance boosted by 25%"
            },
            card2: {
                text1: "Improved Wire Extrusion (1,750 ops)",
                text2 : "50% more wire supply from every spool",
                price: {
                    ops: 5
                },
                action: 50,
                next: '',
                valid: false,
                id: "card2",
                terminal: ""
            },
            card3: {
                text1: "RecTracker (500 ops)",
                text2 : "Automatically calculates average revenue",
                text3 : "per second",
                price: {
                    ops: 5
                },
                action: 0,
                next: 'showRevTracker',
                valid: false,
                id: "card3",
                terminal: "RevTracker online"
            }
        }
    }

    handleOnClick = (id, next, price, action) => {
        this.props.deleteCard(id);
        switch(next){
            case 'showRevTracker':
                this.props.showRevTracker(price.ops);
                break;
            case 'AutoClippers25':
                this.props.addProject(projects.AutoClippers50);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveAutoClippers(action);
                break;
            case 'autoClippers50':
                this.props.addProject(projects.OptimizedAutoClippers75);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveAutoClippers(action);
                break;
            case 'autoClippers75':
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveAutoClippers(action);
                break;
        }


        
    }

    /**
    * Methods
    */

    renderCards = () => {
        return(
            <div>
                {this.props.cards.map((el,i)=>{
                    if(el){
                        return(
                            <Card
                                key={el.id}
                                onClick={() => this.handleOnClick(el.id, el.next, el.price, el.action)}
                                valid={el.valid}
                                price={el.price.ops}
                                id={el.id}
                                action={el.action}
                                i={i}
                            >
                                <div>{el.text1}</div>
                                <div>{el.text2}</div>
                                {el.text3 ? <div>{el.text3}</div> : null}
                            </Card>
                        )
                    }
                   
                })}
            </div>
        )        
    }

    componentWillMount = () => {
        this.props.initProjects(this.state.card1, this.state.card2, this.state.card3)
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
            initProjects: bindActionCreators(Actions.initProjects, dispatch),
            deleteCard: bindActionCreators(Actions.deleteCard, dispatch),
            showRevTracker: bindActionCreators(Actions.showRevTracker, dispatch),
            addProject: bindActionCreators(Actions.addProject, dispatch),
            removePriceOfProjectOps: bindActionCreators(Actions.removePriceOfProjectOps, dispatch),
            improveAutoClippers: bindActionCreators(Actions.improveAutoClippers, dispatch),
        };
    }
)(Projects);

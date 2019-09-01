/**
* Libraries
*/

import React,{
    Component
} from 'react';


/**
* Components
*/

import Button from '../../../library/Button/button';

/**
* Styles
*/

import './business.scss';

/**
* Business component definition and export
*/

class Business extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="business">
                <div className="business-label">Business</div>
                <div className="business-line"/>
                <div className="business-section">
                    <div className="business-text">Available Funds: </div>
                    <div className="business-text">Unsold Inventory: </div>
                    <div className="business-wrapper1">
                        <Button
                            // onClick={this.makePaperclip}
                            text={"lower"}
                        />
                        <Button
                            // onClick={this.makePaperclip}
                            text={"raise"}
                        />
                        <div className="business-text">Price per Clip: </div>
                    </div>
                    <div className="business-text">Public Demand: </div>
                </div>
                <div className="business-section">
                    <div className="business-wrapper2">
                        <Button
                            // onClick={this.makePaperclip}
                            text={"Marketing"}
                        />
                        <div className="business-text">Level: </div>
                    </div>
                    <div className="business-text">Cost:</div>
                </div>
            </div>
        );
    }
}

export default Business;

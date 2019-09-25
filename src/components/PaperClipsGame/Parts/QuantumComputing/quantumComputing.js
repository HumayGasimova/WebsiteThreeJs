/**
* Libraries
*/

import React,{
    Component
} from 'react';


/**
* Components
*/

import Button from '../../../../library/Button/button';

/**
* Styles
*/

import './quantumComputing.scss';

/**
* QuantumComputing component definition and export
*/

class QuantumComputing extends Component {

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
            <div className="quantumComputing">
                <div className="quantumComputing-label">Quantum Computing</div>
                <div/>
                <div className="quantumComputing-wrapper1">
                    <Button
                        className="quantumComputing-button"
                        // onClick={this.props.increaseProcessorsMemory}
                        text={"Compute"}
                        // disabled={this.props.marketingButtonDisabled}
                    />
                    <div>Need Photonic Chips</div>
                </div>
            </div>
        );
    }
}

export default QuantumComputing;

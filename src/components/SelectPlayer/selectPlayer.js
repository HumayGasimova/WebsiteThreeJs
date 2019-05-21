/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './selectPlayer.scss';

/**
 * SelectPlayer component definition and export
 */
class SelectPlayer extends Component {

    /**
    * Methods
    */

    renderFirstButton = () => {
        return(
            <div 
                className={this.props.selected1Player ? "button chosen" : "button"}
                onClick={this.props.select1Player}
            >
                <div> X </div>
                <div>
                    {this.props.counterX}
                </div>
            </div>
        )
    }

    renderSecondButton = () => {
        return(
            <div 
                className={this.props.selected2Player ? "button chosen" : "button"}
                onClick={this.props.select2Player}
            >
               <div> O </div>
               <div>
                    {this.props.counterY}
                </div>
            </div>
        )
    }

    /**
    * Markup
    */

    render(){
        return(
            // <div>
            //     <form onSubmit={(e)=>this.handleSubmitForm(e)}>
            //         <label>
            //             <input type="radio" name="player" value="X"/>
            //             Player X
            //         </label>
            //         <label>
            //             <input type="radio" name="player" value="O"/>
            //             Player O
            //         </label>
            //             <input type="submit" value="Start"/>
            //     </form>
            // </div>
            <div className="buttons">
                {this.renderFirstButton()}
                {this.renderSecondButton()}    
            </div>
        );
    }
}

export default SelectPlayer;

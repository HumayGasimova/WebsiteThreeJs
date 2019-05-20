/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * ChoosePlayer component definition and export
 */
class ChoosePlayer extends Component {

    /**
    * Methods
    */

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.player(e.target.player.value);
    } 

    /**
    * Markup
    */

    render(){
        return(
            <div>
                <form onSubmit={(e)=>this.handleSubmitForm(e)}>
                    <label>
                        <input type="radio" name="player" value="X"/>
                        Player X
                    </label>
                    <label>
                        <input type="radio" name="player" value="O"/>
                        Player O
                    </label>
                        <input type="submit" value="Start"/>
                </form>
            </div>
        );
    }
}



export default ChoosePlayer;

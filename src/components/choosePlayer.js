import React,{
    Component
} from 'react';


class ChoosePlayer extends Component {

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.player(e.target.player.value);
    } 

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

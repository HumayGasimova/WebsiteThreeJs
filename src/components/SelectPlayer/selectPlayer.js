import React,{
    Component
} from 'react';
import './selectPlayer.scss';

class SelectPlayer extends Component {

    state={
        firstPlayer: "X",
        secondPlayer: "O"
    } 

    renderFirstButton = () => {
        return(
            <div 
                className={this.props.selected1Player ? "button chosen" : "button"}
                onClick={this.props.select1Player}
            >
                X
            </div>
        )
    }

    renderSecondButton = () => {
        return(
            <div 
                className={this.props.selected2Player ? "button chosen" : "button"}
                onClick={this.props.select2Player}
            >
                O
            </div>
        )
    }

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

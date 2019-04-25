import React,{
   Component
} from 'react';
import Box from "./box";
import './app.scss'
import './box.scss';
import MainBox from './mainBox';
import ChoosePlayer from './choosePlayer';

export class App extends Component {

   state = {
      mainBox:['','','',
               '','','',
               '','',''],
      firstPlayer: null,
      winner: null
      
   } 


   handleOnClick = (i) => {
      if(this.state.firstPlayer && !this.state.winner){
         let updatedBox = this.state.mainBox;
         if(this.state.mainBox[i]===''){
            updatedBox[i] = this.state.firstPlayer;
            this.setState({
               mainBox: updatedBox,
               firstPlayer: this.state.firstPlayer === "X" ? "O" : "X"
            })
            this.checkWinner();
         }
      }
   }

   checkWinner = () => {
      let winnerList = [
         ["0","1","2"],
         ["3","4","5"],
         ["6","7","8"],
         ["0","3","6"],
         ["1","4","7"],
         ["2","5","8"],
         ["0","4","8"],
         ["2","4","6"]
   ]
   winnerList.map((el,i)=>{
      let list = winnerList[i];
     if(this.state.mainBox[list[0]] && this.state.mainBox[list[0]] === this.state.mainBox[list[1]] && this.state.mainBox[list[0]] === this.state.mainBox[list[2]]){
         this.setState({
            winner: this.state.firstPlayer
         })
      }
      })
   }

   setPlayer = (player) => {
      this.setState({
         firstPlayer:player
      })
   }

   resetGame = () => {
      this.setState({
         mainBox: ['','','',
                   '','','',
                  '','',''],
         firstPlayer: null,
         winner: null
      })
   }
   renderPlayerForm = () => {
      if(this.state.firstPlayer === null){
         return (
            <ChoosePlayer
               player={(e)=>this.setPlayer(e)}
            />
         )
      }else{
         if(!this.state.winner){
            return(
               <h3>Next Player is {this.state.firstPlayer}</h3>
            )
         }else{
            return(
               <div>
                  <h3>The winner is {this.state.winner}</h3>
                  <button onClick={this.resetGame}>Reset</button>
               </div>
            )
         }
      }
      
   }
   renderMainBox = () => {
      return(
            <MainBox
               firstPlayer={this.state.firstPlayer}
            >
               <div className='outerBox'>
                     {this.state.mainBox.map((el,i)=>{
                        return (
                           <Box
                              key={i}
                              onClick={() => {this.handleOnClick(i)}}
                              clicked={this.state.clicked}
                              player={this.state.firstPlayer}
                           >
                              {el}
                           </Box>
                        )
                     })}
               </div>
            </MainBox>
      )
   }

   render(){
      return(
         <div>
          
               {this.renderPlayerForm()}
            
               {this.renderMainBox()}
         
         </div>
      );
   }
}

export default App
import React,{
   Component
} from 'react';
import Box from "./Box/box";
import './app.scss'
import './Box/box.scss';
import MainBox from './MainBox/mainBox';
import ChoosePlayer from './ChoosePlayer/choosePlayer';
import SelectPlayer from './SelectPlayer/SelectPlayer';
import X from './XO/x';
import O from './XO/o';

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

   select1Player = () => {
      this.setState({
         firstPlayer: "X"
      })
   }
   select2Player = () => {
      this.setState({
         firstPlayer: "O"
      })
   }

   renderPlayerForm = () => {
      if(this.state.firstPlayer === null){
         return (
            // <ChoosePlayer
            //    player={(e)=>this.setPlayer(e)}
            // />
            <SelectPlayer
               select1Player={this.select1Player}
               select2Player={this.select2Player}
            />
         )
      }else{
         if(!this.state.winner){
            return(
             
               <SelectPlayer
                  selected1Player={this.state.firstPlayer==="X"}
                  selected2Player={this.state.firstPlayer==="O"}
               />
               )
         }else{
            return(
               <div>
                  <h3>The winner is {this.state.winner}</h3>
               </div>
            )
         }
      }
   }

   renderChild = (i) => {
      let state = this.state.mainBox;
         if(state[i] === "X"){
            return(
               <div>
                     <X/>
               </div>
            )
         }else{
            if(state[i] === "O")
            return(
               <div>
                  <O/>
               </div>
            )
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
                              number={"number" + i}
                           >
                             {this.renderChild(i)}
                           </Box>
                        )
                     })}
               </div>
            </MainBox>
      )
   }

   renderReset = () => {
      return(
         <div className="textReset">
            <h3 onClick={this.resetGame}>RESTART GAME</h3>
         </div>
      )
   }

   renderWhoseTurn = () => {
      if(this.state.firstPlayer === null){
         return(
            <div className="text">
               Start game or select player
            </div>
         )
      }else{
         if(this.state.firstPlayer === "X"){
            return(
               <div className="text">
                  X Turn
               </div>
            )
         }else{
            return(
               <div className="text">
                  O Turn
               </div>
            )
         }
      }
   }

   render(){
      return(
         <div className="background">
            {this.renderPlayerForm()}
            {this.renderWhoseTurn()}
            <div className="main">
               <div className="mainBox">
                  {this.renderMainBox()}
               </div>
            </div>
            {this.renderReset()}
            <O/>
            <X/>
         </div>


      );
   }
}

export default App;

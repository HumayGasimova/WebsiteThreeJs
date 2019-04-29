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
import VerticalLine from './WinnersLine/verticalLine';
import HorizontalLine from './WinnersLine/horizontalLine';
import DiagonalLineLeft from './WinnersLine/diagonalLineLeft';
import DiagonalLineRight from './WinnersLine/diagonalLineRight';

export class App extends Component {

   state = {
      mainBox:['','','',
               '','','',
               '','',''],
      firstPlayer: null,
      winner: null ,
      winnerLine: [] 
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

   renderWinnerLine = () => {
      let line = this.state.winnerLine
      if(line[0] === "0" && line[1] === "1" && line[2] === "2"||
         line[0] === "3" && line[1] === "4" && line[2] === "5"||
         line[0] === "6" && line[1] === "7" && line[2] === "8"){
            return (
               <div className="">
                  <HorizontalLine/>
               </div>
            )
         }else{
            if(line[0] === "0" && line[1] === "3" && line[2] === "6"||
               line[0] === "1" && line[1] === "4" && line[2] === "7"||
               line[0] === "2" && line[1] === "5" && line[2] === "8"){
                  return (
                     <div className="">
                        <VerticalLine/>
                     </div>
                  )
            }else{
               if(line[0] === "0" && line[1] === "4" && line[2] === "8"){
                     return (
                        <div className="DiagonalLineLeft">
                           <DiagonalLineLeft
                              player={this.state.winner === "X"}
                           />
                        </div>
                     )
               }else{
                  if(line[0] === "2" && line[1] === "4" && line[2] === "6"){
                     return (
                        <div className="DiagonalLineRight">
                           <DiagonalLineRight
                              player={this.state.winner === "X"}
                           />
                        </div>
                     )
                  }
               }
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
            winner: this.state.firstPlayer,
            winnerLine: list
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
         winner: null,
         winnerLine: [] 
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
            <SelectPlayer
               select1Player={this.select1Player}
               select2Player={this.select2Player}
            />
         )
      }else{
         return(
            <SelectPlayer
               selected1Player={this.state.firstPlayer==="X"}
               selected2Player={this.state.firstPlayer==="O"}
            />
         )
      }
   }

   renderChild = (el) => {
         if(el === "X"){
            return(
               <div>
                     <X/>
               </div>
            )
         }else{
            if(el === "O")
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
                             {this.renderChild(el)}
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
         if(this.state.firstPlayer === "X" && !this.state.winner){
            return(
               <div className="text">
                  X Turn
               </div>
            )
         }else{
            if(this.state.firstPlayer === "O" && !this.state.winner){
               return(
                  <div className="text">
                     O Turn
                  </div>
               )
            }else{
               return(
                  <div className="text">
                     Game Over
                  </div>
               )
            }
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
            {this.renderWinnerLine()}
            {this.renderReset()}
         </div>
      );
   }
}

export default App;

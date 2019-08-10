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
import store from '../store/store';

/**
 * Components
 */

import MainBox from './MainBox/mainBox';
import Box from "./Box/box";
import SelectPlayer from './SelectPlayer/selectPlayer';
import X from './XO/x';
import O from './XO/o';
import VerticalLine from './WinnersLine/verticalLine';
import HorizontalLine from './WinnersLine/horizontalLine';
import DiagonalLineLeft from './WinnersLine/diagonalLineLeft';
import DiagonalLineRight from './WinnersLine/diagonalLineRight';
import WinnerO from './WinnerScreen/winnerO';
import WinnerX from './WinnerScreen/winnerX';
import Toolbar from './Toolbar/toolbar';
import SideDrawer from './SideDrawer/sideDrawer';
import Layout from './Layout/layout';

/**
 * Styles
 */

import './app.scss'
import './Box/box.scss';

/**
 * Actions
 */

import * as Actions from '../actions';
import Pic from '../Image/Pic.jpg';


/**
 * App component definition and export
 */

export class App extends Component {

   /**
    * Constructor
    */

   constructor(props){
      super(props);
      this.state = {
         coordinateX:['','','',
                     '','','',
                     '','',''],
         coordinateY:['','','',
                     '','','',
                     '','',''],
         counterX: 0,
         counterY: 0
      } 
   }
  
   /**
    * Methods
    */

   centerXY = (i) => {
      return (x,y) => {
         let coordinateX = this.state.coordinateX;
         let coordinateY = this.state.coordinateY;
         coordinateX[i] = Math.round(x);
         coordinateY[i] = Math.round(y);
                  this.setState({
                     coordinateX: coordinateX,
                     coordinateY: coordinateY
                  })
               }
   }

   handleOnClick = (i) => {
      if(this.props.firstPlayer && !this.props.winner){
         if(this.props.mainBox[i]===''){
            this.props.updateBox(i,this.props.firstPlayer);
            this.props.updatePlayer();
            this.checkIfDraw();
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
            if(this.props.mainBox[list[0]] && this.props.mainBox[list[0]] === this.props.mainBox[list[1]] && this.props.mainBox[list[0]] === this.props.mainBox[list[2]]){
              this.props.setWinner(this.props.firstPlayer, list);
              this.props.resetPlayer();
              
               this.setState({
                  counterX: this.props.firstPlayer === "X" ? this.state.counterX + 1 : this.state.counterX,
                  counterY: this.props.firstPlayer === "O" ? this.state.counterY + 1 : this.state.counterY
               })
            }
         })
   
  
   }


   checkIfDraw = () => {
      let checkIfDraw = [];
      let allBoxesFull;
      
      this.props.mainBox.map((el, i) => {
         if(el === ''){
            checkIfDraw.push(0);
         }else{
            checkIfDraw.push(1);
         }
      })

      allBoxesFull = checkIfDraw.every((val, i, arr) => val === arr[0]);
     if(allBoxesFull){
         this.props.setDraw();
         this.props.resetPlayer();
     }
   }
  
   // checkIfDraw = () => {
   //    let drawList = [
   //       ["0","2","3","4","7"],
   //       ["1","2","3","4","8"],
   //       ["2","4","5","6","8"],
   //       ["0","4","5","6","7"],

   //       ["1","3","5","6","8"],
   //       ["1","2","3","7","8"],
   //       ["0","2","3","5","7"],
   //       ["0","1","5","6","7"],

   //       ["0","1","5","6","8"],
   //       ["1","2","3","6","8"],
   //       ["0","2","3","7","8"],
   //       ["0","2","5","6","7"],

   //       ["0","2","4","5","7"],
   //       ["0","1","4","5","6"],
   //       ["1","3","4","6","8"],
   //       ["2","3","4","7","8"],

   //       ["1","4","5","6","8"],
   //       ["1","2","3","4","8"],
   //       ["0","2","3","4","7"],
   //       ["0","4","5","6","7"]
   //    ]
   //    drawList.map((el,i)=>{
   //       let list = drawList[i];
   //          if(this.props.mainBox[list[0]] && this.props.mainBox[list[0]] === this.props.mainBox[list[1]] && this.props.mainBox[list[1]] === this.props.mainBox[list[2]] && this.props.mainBox[list[2]] === this.props.mainBox[list[3]] && this.props.mainBox[list[3]] === this.props.mainBox[list[4]]){
   //            this.props.setDraw();
   //            this.props.resetPlayer();
   //             this.setState({
   //                winner:"No One",
   //                draw: true,
   //                firstPlayer: null
   //             })
   //          }
   //       })
   // }

   renderWinnerLine = () => {
      let line = this.props.winnerLine
      let coordinateX = this.state.coordinateX;
      let coordinateY = this.state.coordinateY;
      if(line[0] === "0" && line[1] === "1" && line[2] === "2"||
         line[0] === "3" && line[1] === "4" && line[2] === "5"||
         line[0] === "6" && line[1] === "7" && line[2] === "8"){
            return (
               <div className="winnerLine">
                  <HorizontalLine
                     height={"450"}
                     player={this.props.winner === "X"}
                     coordinateX1={line[0] === "0" ? coordinateX[0]:(line[0] === "3" ? coordinateX[3]: coordinateX[6])}
                     coordinateX2={line[2] === "2" ? coordinateX[2]:(line[2] === "5" ? coordinateX[5]: coordinateX[8])}
                     coordinateY1={line[0] === "0" ? coordinateY[0]:(line[0] === "3" ? coordinateY[3]: coordinateY[6])}
                     coordinateY2={line[2] === "2" ? coordinateY[2]:(line[2] === "5" ? coordinateY[5]: coordinateY[8])}
                  />
               </div>
            )
         }else{
            if(line[0] === "0" && line[1] === "3" && line[2] === "6"||
               line[0] === "1" && line[1] === "4" && line[2] === "7"||
               line[0] === "2" && line[1] === "5" && line[2] === "8"){
                  return (
                     <div className="winnerLine">
                        <VerticalLine
                           height={"450"}
                           player={this.props.winner === "X"}
                           coordinateX1={line[0] === "0" ? coordinateX[0]:(line[0] === "1" ? coordinateX[1]: coordinateX[2])}
                           coordinateX2={line[2] === "6" ? coordinateX[6]:(line[2] === "7" ? coordinateX[7]: coordinateX[8])}
                           coordinateY1={line[0] === "0" ? coordinateY[0]:(line[0] === "1" ? coordinateY[1]: coordinateY[2])}
                           coordinateY2={line[2] === "6" ? coordinateY[6]:(line[2] === "7" ? coordinateY[7]: coordinateY[8])}
                        />
                     </div>
                  )
            }else{
               if(line[0] === "0" && line[1] === "4" && line[2] === "8"){
                  console.log(coordinateX[0],coordinateY[0])
                     return (
                        <div className="winnerLine">
                           <DiagonalLineLeft
                              height={"450"}
                              player={this.props.winner === "X"}
                              coordinateX1={coordinateX[0]}
                              coordinateX2={coordinateX[8]}
                              coordinateY1={coordinateY[0]}
                              coordinateY2={coordinateY[8]}
                           />
                        </div>
                     )
               }else{
                  if(line[0] === "2" && line[1] === "4" && line[2] === "6"){
                     return (
                        <div className="winnerLine">
                           <DiagonalLineRight
                              height={"450"}
                              player={this.props.winner === "X"}
                              coordinateX1={coordinateX[2]}
                              coordinateX2={coordinateX[6]}
                              coordinateY1={coordinateY[2]}
                              coordinateY2={coordinateY[6]}
                           />
                        </div>
                     )
                  }
               }
            }
         }
   }

   resetGame = () => {
      this.props.resetPlayer();
      this.props.resetGame();
      this.props.resetMainBox();
   }

   select1Player = () => {
      this.props.setXPlayer();
   }

   select2Player = () => {
      this.props.setOPlayer();
   }

   renderPlayerForm = () => {
      if(this.props.firstPlayer === null){
         return (
            <SelectPlayer
               select1Player={this.select1Player}
               select2Player={this.select2Player}
               counterX={this.state.counterX}
               counterY={this.state.counterY}
               dash={this.state.dash}
            />
         )
      }else{
         return(
            <SelectPlayer
               selected1Player={this.props.firstPlayer==="X"}
               selected2Player={this.props.firstPlayer==="O"}
               counterX={this.state.counterX}
               counterY={this.state.counterY}
               dash={this.state.dash}
            />
         )
      }
   }

   renderChild = (el) => {
         if(el === "X"){
            return(
               <div>
                     <X className={"x"}/>
               </div>
            )
         }else{
            if(el === "O")
               return(
                  <div>
                     <O
                        radius={"35"}
                        width={"150"}
                        height={"160"}
                        strokeWidth={"10"}
                        cx={"50"}
                        cy={"50"}
                        animationShow={true}
                      />
                  </div>
               )
         }
   }

   renderMainBox = () => {
     return(
               <MainBox
                  firstPlayer={this.props.firstPlayer}
               >
                  <div className='outerBox'>
                        {this.props.mainBox.map((el,i)=>{
                           return (
                                 <Box
                                    key={i}
                                    onClick={() => {this.handleOnClick(i)}}
                                    clicked={this.state.clicked}
                                    player={this.props.firstPlayer}
                                    number={"number" + i}
                                    centerXY={this.centerXY(i)}
                                    // winnerLine={this.props.winnerLine}
                                    // winner={this.props.winner}
                                 >
                                 {this.renderChild(el)}
                                 </Box>
                           )
                        })}
                  </div>
                  {/* {this.renderWinnerLine()} */}
               </MainBox>
     )
   }

   renderWinnerScreen = () => {
      
      if(this.props.winner === "O"){
         return(
               <WinnerO
                  winnerScreen={"winnerScreen3x3"}
                  winner={this.props.winner}
                  /> 
         )
      }else{
         if(this.props.winner === "X"){
            return(
                  <WinnerX
                     winnerScreen={"winnerScreen3x3"}
                     winner={this.props.winner}
                     />
            )
         }else{
            if(this.props.winner === "No One" && this.props.draw){
               return(

                  <div className="drawScreen">
                     <div className="drawImages">
                        <X screen={true}/>
                        <O
                           radius={"40"}
                           width={"120"}
                           height={"230"}
                           strokeWidth={"15"}
                           cx={"60"}
                           cy={"150"}
                           />
                     </div>
                     <div className="drawText">
                        DRAW!
                     </div>
                   </div>
               )
            }
         }
      }  
   }

   renderReset = () => {
      return(
         <div className="textReset">
            <h3 onClick={this.resetGame}>RESTART GAME</h3>
         </div>
      )
   }

   renderWhoseTurn = () => {
      if(this.props.firstPlayer === null && this.props.winner === null){
         return(
            <div className="text">
               Start game or select player
            </div>
         )
      }else{
         if(this.props.firstPlayer === "X" && this.props.winner === null){
            return(
               <div className="text">
                  X Turn
               </div>
            )
         }else{
            if(this.props.firstPlayer === "O" && this.props.winner === null){
               return(
                  <div className="text">
                     O Turn
                  </div>
               )
            }else{
               if(this.props.firstPlayer === null && this.props.winner !== null){
                  return(
                     <div className="text">
                        Game Over
                     </div>
                  )
               }
            }
         }
      }
   }

   componentWillUnmount = () => {
      this.props.resetPlayer();
      this.props.resetGame();
      this.props.resetMainBox();
   }

   // componentDidMount() {
   //    window.scrollTo(0, 0);
   //  }

   /**
    * Markup
    */

   render(){
      return(
            <div >
               <div className="background">
                  <Toolbar/>
                  {this.renderPlayerForm()}
                  {this.renderWhoseTurn()}
                  <div className="main">
                     <div className="mainBox">
                        {this.renderMainBox()}
                        {this.renderWinnerScreen()}
                     </div>
                  </div>
                  {this.renderWinnerLine()}
                  {this.renderReset()}
                  {/* <div>{console.log(this.props.draw)}</div> */}
                  {/* <div className="emptyDiv"/> */}
               </div>
               {/* <div>{console.log(store.getState())}</div> */}
               <div>{console.log(this.props.history)}</div>
               {/* <canvas /> */}
            </div>
      );
   }
}

/**
 * Prop types
 */

 
export default connect(
   (state) => {
      return {
         firstPlayer: state.setPlayer.firstPlayer,
         mainBox: state.mainBox.mainBox,
         winner: state.gameOver.winner,
         winnerLine: state.gameOver.winnerLine,
         draw: state.gameOver.draw,
         sideDrawerOpen: state.sideDrawer.sideDrawerOpen
      };
   },
   (dispatch) => {
      return {
         setXPlayer: bindActionCreators(Actions.setXPlayer, dispatch),
         setOPlayer: bindActionCreators(Actions.setOPlayer, dispatch),
         resetPlayer: bindActionCreators(Actions.resetPlayer, dispatch),
         updateBox: bindActionCreators(Actions.updateBox, dispatch),
         updatePlayer: bindActionCreators(Actions.updatePlayer, dispatch),
         setWinner: bindActionCreators(Actions.setWinner, dispatch),
         setDraw: bindActionCreators(Actions.draw, dispatch),
         sideDrawerIsOpen: bindActionCreators(Actions.sideDrawerOpen, dispatch),
         resetGame: bindActionCreators(Actions.resetGame, dispatch),
         resetMainBox: bindActionCreators(Actions.resetMainBox, dispatch)
      };
   }
)(App);


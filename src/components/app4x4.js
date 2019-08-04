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
 import Boxes4x4 from "./Boxes4x4/boxes4x4";
 import SelectPlayer from './SelectPlayer/selectPlayer';
 import RenderWinnerLine from './WinnersLine/renderWinnerLine';
 import X from './XO/x';
 import O from './XO/o';
 import WinnerO from './WinnerScreen/winnerO';
 import WinnerX from './WinnerScreen/winnerX';
 import MenuButton from './MenuButton/menuButton';
 import Toolbar from './Toolbar/toolbar';
 import SideDrawer from './SideDrawer/sideDrawer';
 
 /**
  * Styles
  */
 
 import './app4x4.scss'
 import './Boxes4x4/boxes4x4';
 
 /**
  * Actions
  */
 
 import * as Actions from '../actions';
 
 
 /**
  * App4x4 component definition and export
  */
 
 export class App4x4 extends Component {
 
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
          ["0","1","2","3"],
          ["4","5","6","7"],
          ["8","9","10","11"],
          ["12","13","14","15"],
          ["0","4","8","12"],
          ["1","5","9","13"],
          ["2","6","10","14"],
          ["3","7","11","15"],
          ["0","5","10","15"],
          ["3","6","9","12"]
        
    ]
 
 
       winnerList.map((el,i)=>{
          let list = winnerList[i];
             if(
                 this.props.mainBox[list[0]] && 
                 this.props.mainBox[list[0]] === this.props.mainBox[list[1]] && 
                 this.props.mainBox[list[0]] === this.props.mainBox[list[2]] &&
                 this.props.mainBox[list[0]] === this.props.mainBox[list[3]]
                ){
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
                      <X/>
             )
          }else{
             if(el === "O")
                return(
                      <O
                         radius={"30"}
                         width={"130"}
                         height={"140"}
                         strokeWidth={"10"}
                         cx={"50"}
                         cy={"50"}
                         animationShow={true}
                       />
                )
          }
    }
 
    renderMainBox = () => {
      return(
                <MainBox
                   firstPlayer={this.props.firstPlayer}
                >
                   <div className='outerBox4x4'>
                         {this.props.mainBox.map((el,i)=>{
                            return (
                                  <Boxes4x4
                                     key={i}
                                     onClick={() => {this.handleOnClick(i)}}
                                     clicked={this.state.clicked}
                                     player={this.props.firstPlayer}
                                     number={"box4x4number" + i}
                                     centerXY={this.centerXY(i)}
                                     // winnerLine={this.props.winnerLine}
                                     // winner={this.props.winner}
                                  >
                                  {this.renderChild(el)}
                                  </Boxes4x4>
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
                  winnerScreen={"winnerScreen4x4"}
                  winner={this.props.winner}
                  /> 
          )
       }else{
          if(this.props.winner === "X"){
             return(
                   <WinnerX
                     winnerScreen={"winnerScreen4x4"}
                     winner={this.props.winner}
                     />
             )
          }else{
             if(this.props.winner === "No One" && this.props.draw){
                return(
 
                   <div className="drawScreen4x4">
                      <div className="drawImages4x4">
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
                      <div className="drawText4x4">
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
          <div className="textReset4x4">
             <h3 onClick={this.resetGame}>RESTART GAME</h3>
          </div>
       )
    }
 
    renderWhoseTurn = () => {
       if(this.props.firstPlayer === null && this.props.winner === null){
          return(
             <div className="text4x4">
                Start game or select player
             </div>
          )
       }else{
          if(this.props.firstPlayer === "X" && this.props.winner === null){
             return(
                <div className="text4x4">
                   X Turn
                </div>
             )
          }else{
             if(this.props.firstPlayer === "O" && this.props.winner === null){
                return(
                   <div className="text4x4">
                      O Turn
                   </div>
                )
             }else{
                if(this.props.firstPlayer === null && this.props.winner !== null){
                   return(
                      <div className="text4x4">
                         Game Over
                      </div>
                   )
                }
             }
          }
       }
    }

   //  renderSideDrawer = () => {
   //     return(
   //        <SideDrawer
   //           sideDrawerHandler={() => this.props.sideDrawerIsOpen("No")}
   //           sideDrawerOpen={this.props.sideDrawerOpen}
   //        />
   //     )
   //  }
 

    componentWillUnmount = () => {
      this.props.resetPlayer();
      this.props.resetGame();
      this.props.resetMainBox();
   }
   
    /**
     * Markup
     */
 
    render(){
       return(
          <div>
             <div >
                <div className="background4x4">
                   <Toolbar/>
                   {this.renderPlayerForm()}
                   {this.renderWhoseTurn()}
                   <div className="main4x4">
                      <div className="mainBox4x4">
                         {this.renderMainBox()}
                         {this.renderWinnerScreen()}
                      </div>
                   </div>
                   <RenderWinnerLine
                     coordinateX={this.state.coordinateX}
                     coordinateY={this.state.coordinateY}
                   />
                   {this.renderReset()}
                   {/* <div>{console.log(this.props.draw)}</div> */}
                   <div className="emptyDiv4x4"/>
                </div>
                {/* <div>{console.log(store.getState())}</div> */}
                <div>{console.log(this.state.coordinateX, this.state.coordinateY)}</div>
                {/* <canvas /> */}
             </div>
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
           mainBox: state.mainBox4x4.mainBox,
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
 )(App4x4);
 
 
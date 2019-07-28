/**
 * Libraries
 */

import React,{
    Component
} from 'react';

import {
    connect
 } from 'react-redux';

/**
 * Components
 */

import VerticalLine from './verticalLine';
import HorizontalLine from './horizontalLine';
import DiagonalLineLeft from './diagonalLineLeft';
import DiagonalLineRight from './diagonalLineRight';

/**
 * Styles
 */

import './winnersLine.scss';

/**
 * RenderWinnerLine component definition and export
 */

class RenderWinnerLine extends Component {

    renderWinnerLine = () => {
        let line = this.props.winnerLine
        let coordinateX = this.props.coordinateX;
        let coordinateY = this.props.coordinateY;
        let keyWord = line.join('')
        
        switch(keyWord){
            case "0123":
                return(
                    <div className="winnerLine4x4">
                        <HorizontalLine
                           height={"550"}
                           player={this.props.winner === "X"}
                           coordinateX1={coordinateX[0]}
                           coordinateX2={coordinateX[3]}
                           coordinateY1={coordinateY[0]}
                           coordinateY2={coordinateY[3]}
                        />
                    </div>
                );
            case "4567":
                return(
                    <div className="winnerLine4x4">
                        <HorizontalLine
                           height={"550"}
                           player={this.props.winner === "X"}
                           coordinateX1={coordinateX[4]}
                           coordinateX2={coordinateX[7]}
                           coordinateY1={coordinateY[4]}
                           coordinateY2={coordinateY[7]}
                        />
                    </div>
                );
            case "891011":
                  return(
                     <div className="winnerLine4x4">
                        <HorizontalLine
                           height={"550"}
                           player={this.props.winner === "X"}
                           coordinateX1={coordinateX[8]}
                           coordinateX2={coordinateX[11]}
                           coordinateY1={coordinateY[8]}
                           coordinateY2={coordinateY[11]}
                        />
                     </div>
                  );
            case "12131415":
                  return(
                     <div className="winnerLine4x4">
                        <HorizontalLine
                           height={"550"}
                           player={this.props.winner === "X"}
                           coordinateX1={coordinateX[12]}
                           coordinateX2={coordinateX[15]}
                           coordinateY1={coordinateY[12]}
                           coordinateY2={coordinateY[15]}
                        />
                     </div>
                  );
            case "04812":
               return(
                  <div className="winnerLine4x4">
                     <VerticalLine
                        height={"550"}
                        player={this.props.winner === "X"}
                        coordinateX1={coordinateX[0]}
                        coordinateX2={coordinateX[12]}
                        coordinateY1={coordinateY[0]}
                        coordinateY2={coordinateY[12]}
                     />
                  </div>
               );    
               case "15913":
                  return(
                     <div className="winnerLine4x4">
                        <VerticalLine
                           height={"550"}
                           player={this.props.winner === "X"}
                           coordinateX1={coordinateX[1] }
                           coordinateX2={coordinateX[13]}
                           coordinateY1={coordinateY[1]}
                           coordinateY2={coordinateY[13]}
                        />
                     </div>
                  );   
               case "261014":
                  return(
                     <div className="winnerLine4x4">
                        <VerticalLine
                           height={"550"}
                           player={this.props.winner === "X"}
                           coordinateX1={coordinateX[2]}
                           coordinateX2={coordinateX[14]}
                           coordinateY1={coordinateY[2]}
                           coordinateY2={coordinateY[14]}
                        />
                     </div>
                  );   
               case "371115":
                  return(
                     <div className="winnerLine4x4">
                        <VerticalLine
                           height={"550"}
                           player={this.props.winner === "X"}
                           coordinateX1={coordinateX[3]}
                           coordinateX2={coordinateX[15]}
                           coordinateY1={coordinateY[3]}
                           coordinateY2={coordinateY[15]}
                        />
                     </div>
                  );   
               case "051015":
                  return(
                    <div className="winnerLine4x4">
                        <DiagonalLineLeft
                           height={"550"}
                           player={this.props.winner === "X"}
                           coordinateX1={coordinateX[0]}
                           coordinateX2={coordinateX[15]}
                           coordinateY1={coordinateY[0]}
                           coordinateY2={coordinateY[15]}
                        />
                    </div>
                  );
               case "36912":
                  return(
                    <div className="winnerLine4x4">
                        <DiagonalLineRight
                           height={"550"}
                           player={this.props.winner === "X"}
                           coordinateX1={coordinateX[3]}
                           coordinateX2={coordinateX[12]}
                           coordinateY1={coordinateY[3]}
                           coordinateY2={coordinateY[12]}
                        />
                    </div>
                  ); 

        }

   //     if(line[0] === "0" && line[1] === "1" && line[2] === "2" && line[3] === "3"||
   //        line[0] === "4" && line[1] === "5" && line[2] === "6" && line[3] === "7"||
   //        line[0] === "8" && line[1] === "9" && line[2] === "10" && line[3] === "11"||
   //        line[0] === "12" && line[1] === "13" && line[2] === "14" && line[3] === "15"
   //        ){
            
   //           return (
   //              <div className="winnerLine4x4">
   //                 <HorizontalLine
   //                    player={this.props.winner === "X"}
   //                    coordinateX1={line[0] === "0" ? coordinateX[0]:(line[0] === "4" ? coordinateX[4]: (line[0] === "8" ? coordinateX[8]: coordinateX[12]))}
   //                    coordinateX2={line[3] === "3" ? coordinateX[3]:(line[3] === "7" ? coordinateX[7]: (line[3] === "11" ? coordinateX[11]: coordinateX[15]))}
   //                    coordinateY1={line[0] === "0" ? coordinateY[0]:(line[0] === "4" ? coordinateY[4]: (line[0] === "8" ? coordinateY[8]: coordinateY[12]))}
   //                    coordinateY2={line[3] === "3" ? coordinateY[3]:(line[3] === "7" ? coordinateY[7]: (line[3] === "11" ? coordinateY[11]: coordinateY[15]))}
   //                 />
   //              </div>
   //           )
   //        }else{
   //           if(line[0] === "0" && line[1] === "4" && line[2] === "8" && line[3] === "12"||
   //              line[0] === "1" && line[1] === "5" && line[2] === "9" && line[3] === "13"||
   //              line[0] === "2" && line[1] === "6" && line[2] === "10" && line[3] === "14"||
   //              line[0] === "3" && line[1] === "7" && line[2] === "11" && line[3] === "15"
   //              ){
   //                 return (
   //                    <div className="winnerLine4x4">
   //                       <VerticalLine
   //                          player={this.props.winner === "X"}
   //                          coordinateX1={line[0] === "0" ? coordinateX[0]: (line[0] === "1" ? coordinateX[1] : (line[0] === "2" ? coordinateX[2] : coordinateX[3]))}
   //                          coordinateX2={line[3] === "12" ? coordinateX[12]:(line[3] === "13" ? coordinateX[13]: (line[3] === "14" ? coordinateX[14]: coordinateX[15]))}
   //                          coordinateY1={line[0] === "0" ? coordinateY[0]:(line[0] === "1" ? coordinateY[1]: (line[0] === "2" ? coordinateY[2]: coordinateY[3]))}
   //                          coordinateY2={line[3] === "12" ? coordinateY[12]:(line[3] === "13" ? coordinateY[13]: (line[3] === "14" ? coordinateY[14]: coordinateY[15]))}
   //                       />
   //                    </div>
   //                 )
   //           }else{
   //              if(line[0] === "0" && line[1] === "5" && line[2] === "10" && line[3] === "15"){
   //                    return (
   //                       <div className="winnerLine4x4">
   //                          <DiagonalLineLeft
   //                             player={this.props.winner === "X"}
   //                             coordinateX1={coordinateX[0]}
   //                             coordinateX2={coordinateX[15]}
   //                             coordinateY1={coordinateY[0]}
   //                             coordinateY2={coordinateY[15]}
   //                          />
   //                       </div>
   //                    )
   //              }else{
   //                 if(line[0] === "3" && line[1] === "6" && line[2] === "9" && line[3] === "12"){
   //                     console.log("hey",coordinateX[3])
   //                    return (
   //                       <div className="winnerLine4x4">
   //                          <DiagonalLineRight
   //                             player={this.props.winner === "X"}
   //                             coordinateX1={coordinateX[3]}
   //                             coordinateX2={coordinateX[12]}
   //                             coordinateY1={coordinateY[3]}
   //                             coordinateY2={coordinateY[12]}
   //                          />
   //                       </div>
   //                    )
   //                 }
   //              }
   //           }
   //        }
    }

    render(){
        return(
            <div>
                {this.renderWinnerLine()}
            </div>
        );
    }
}

export default connect(
    (state) => {
       return {
            winner: state.gameOver.winner,
            winnerLine: state.gameOver.winnerLine
       };
    }
 )(RenderWinnerLine);

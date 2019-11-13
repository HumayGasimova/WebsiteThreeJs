/**
* Operators
*/

import { 
    of 
} from 'rxjs';

import { 
    mergeMap 
} from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
* Utility
*/

import * as Utility from '../utility';

/**
* Epic
*/

export const startNewTournamentEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.START_NEW_TOURNAMENT),
        mergeMap(action => {
        let moveCase = Utility.getRandomMove();
        let moveA;
        let moveB;
        switch(moveCase){
            case 1:
                moveA = 'cooperate';
                moveB = 'defect';
                break;
            case 2:
                moveA = 'swerve';
                moveB = 'straight';
                break;
            case 3:
                moveA = 'macro';
                moveB = 'micro';
                break;
            case 4:
                moveA = 'fight';
                moveB = 'back_down';
                break;
            case 5:
                moveA = 'bet';
                moveB = 'fold';
                break;
            case 6:
                moveA = 'raise_price';
                moveB = 'lower_price';
                break;
            case 7:
                moveA = 'opera';
                moveB = 'football';
                break;
            case 8:
                moveA = 'go';
                moveB = 'stay';
                break;
            case 9:
                moveA = 'heads';
                moveB = 'tails';
                break;
            case 10:
                moveA = 'particle';
                moveB = 'wave';
                break;
            case 11:
                moveA = 'discrete';
                moveB = 'continuous';
                break;
            case 12:
                moveA = 'peace';
                moveB = 'war';
                break;
            case 13:
                moveA = 'search';
                moveB = 'evaluate';
                break;
            case 14:
                moveA = 'lead';
                moveB = 'follow';
                break;
            case 15:
                moveA = 'accept';
                moveB = 'reject';
                break;
            case 16:
                moveA = 'accept';
                moveB = 'deny';
                break;
            case 17:
                moveA = 'attack';
                moveB = 'decay';
                break;
        }

        let obj = {
            moveA: moveA,
            moveB: moveB,
            cell1: Utility.getRandomCellValue(),
            cell2: Utility.getRandomCellValue(),
            cell3: Utility.getRandomCellValue(),
            cell4: Utility.getRandomCellValue(),
        }
            return of(
                Actions.tournamentState(true),
                Actions.toggleNewTournamentButton(),
                Actions.updateStrategicModelingData(obj),
                Actions.toggleStrategicModelingLeftPart(false)
            ) 
        })
    ) 
    
export default startNewTournamentEpic;

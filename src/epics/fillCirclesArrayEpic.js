/**
* Operators
*/

import { 
    of,
    interval
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

export const fillCirclesArrayEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.FILL_CIRCLES_ARRAY),
            mergeMap(action => {
                let arrayOfCircles = Utility.getArrayOfCircles(10);
                arrayOfCircles.map((el,i) => {
                    let radius = Utility.getRandomRadius();
                    arrayOfCircles[i] = {
                        id: i,
                        x: Utility.getRandomCoordianteX(radius),
                        y: Utility.getRandomCoordianteY(radius),
                        dx: Utility.getRandomVelocity(),
                        dy: Utility.getRandomVelocity(),
                        radius: radius
                    }
                })
                console.log("RANDOM", arrayOfCircles)
                return of(
                        Actions.updateCirclesArray(arrayOfCircles)
                )
            })   
        ) 
    
         
export default fillCirclesArrayEpic;

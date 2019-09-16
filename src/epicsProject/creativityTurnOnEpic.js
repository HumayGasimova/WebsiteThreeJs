// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
// import * as actionTypes from '../constants/actionTypes';
// import * as Actions from '../actions';
// import { mergeMap } from 'rxjs/operators';
// import { interval } from "rxjs"

// function creativityTurnOnEpic(action$) { 
//     return action$
//         .ofType(actionTypes.CREATIVITY_TURN_ON)
//         .mergeMap(action => {
//             if(action.ops === action.opsMax){
//                 return interval(300).pipe(
//                     mergeMap(() =>{
//                         return Observable.of(
//                             Actions.increaseCreativity()
//                             )
//                         })
//                     )
//                 }
//         })
// }

// export default creativityTurnOnEpic;

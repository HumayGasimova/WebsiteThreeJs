// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/empty';
// import * as actionTypes from '../constants/actionTypes';
// import * as Actions from '../actions';
// import { mergeMap } from 'rxjs/operators';
// import { interval } from "rxjs"

// function throwProjectEpic(action$, state$) { 
//     return action$
//         .ofType(actionTypes.THROW_PROJECT)
//         .mergeMap(action => {
//             // return interval(1000).pipe(
//             //     mergeMap(() => {
//                     if(state$.value.business.ops === state$.value.business.opsMax){
//                         console.log(state$.value.business.creativity)
//                         return Observable.of(
//                             Actions.startCreativityCounter(),
//                         )
//                     }
//                     if(state$.value.business.creativity === 50){
//                         debugger
//                         return Observable.of(
//                             Actions.addLexicalProcessing()
//                         )
//                     }
//                     if(state$.value.business.creativity === 100){
//                         return Observable.of(
//                             Actions.addCombinatoryHarmonics()
//                         )
//                     }
//                     if(state$.value.business.creativity === 150){
//                         return Observable.of(
//                             Actions.addTheHadwingerProblem()
//                         )
//                     }
//                     if(state$.value.business.creativity === 200){
//                         return Observable.of(
//                             Actions.addTheTothSausageConjecture()
//                         )
//                     }
//                     if(state$.value.business.creativity === 250){
//                         return Observable.of(
//                             Actions.addDonkeySpace()
//                         )
//                     }
//                     return Observable.empty()
//                 })
//                 // takeUntil(action$.ofType(actionTypes.STOP))
//         //     )
//         // })
        
// }

// export default throwProjectEpic;

// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
// import * as actionTypes from '../constants/actionTypes';
// import * as Actions from '../actions';

// function toggleChip1Epic(action$, state$) {
//     return action$
//         .ofType(actionTypes.TOGGLE_CHIP_1)
//         .mergeMap(action => {
//             let chip = state$.value.business.chips.find(x => x.chipsNumber === "chip1");
//             if(chip.showChip){
//                 return Observable.of(
//                     Actions.toggleChip1(false)
//                 )
//                 .delay(30000)
//             }else{
//                 return Observable.of(
//                     Actions.toggleChip1(true)
//                 )
//                 .delay(1000)
//             }
//         })       
// }

// export default toggleChip1Epic;

// import { Observable, Rx } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// // import 'rxjs/add/operator/repeat';
// // .timeInterval(2000)
// import * as actionTypes from '../constants/actionTypes';
// import * as Actions from '../actions';

// function repeatAutoPaperClippersEpic(action$) {
//     return action$
//         .ofType(actionTypes.REPEAT_AUTO_PAPER_CLIPPERS)
//         .mergeMap(action => {
//             return Observable.of(
//                 Actions.autoPaperclipsStart(action.priceOfPaperclip, action.delay, action.delayAutoPaperClippers, action.wire)
//             )
//             .delay(action.delayAutoPaperClippers)
//         })
// }

// export default repeatAutoPaperClippersEpic;

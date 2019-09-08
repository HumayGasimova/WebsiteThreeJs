// import { Observable, Rx } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/timeInterval';
// import * as actionTypes from '../constants/actionTypes';
// import * as Actions from '../actions';

// function autoPaperclipsStartsEpic(action$) {
//     return action$
//         .ofType(actionTypes.AUTO_PAPERCLIPS_START)
//         .mergeMap(action => {
//             Rx.Observable.interval(200)
//             .mergeMap(x => {
//                 Observable.of(Actions.startBuyingWire())
//             }
//             )
//             .takeUntil(Actions.sellPaperclips())
//         })       
// }

// export default autoPaperclipsStartsEpic;

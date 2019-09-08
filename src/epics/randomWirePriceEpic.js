// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
// import 'rxjs';
// import * as actionTypes from '../constants/actionTypes';
// import * as Actions from '../actions';

// function randomWirePriceEpic(action$) {
//     function getRandomDelay(){
//         return +((Math.random() * 7000).toFixed());
//     }
//     function getRandomNumber() {
//         return +(Math.random()*(30-10)).toFixed();
//     }
//     return action$
//         .ofType(actionTypes.RANDOM_WIRE_PRICE)
//         // .timer(getRandomDelay())
//         .mergeMap(action => {
//             return Observable.of(
//                 Actions.wirePrice(getRandomNumber())
//             )
//         })
//         // .repeat()

//         // .mergeMap(action => {

//         //     // let wirePrice 
//         //     // setInterval(()=>{
//         //     //     wirePrice = +(Math.random()*(30-10)).toFixed();
//         //     // }, 2000)
//         //     return Observable.of(
//         //         Actions.makePaperclip(action.priceOfPaperclip, action.delay),
//         //         Actions.randomWirePrice()
//         //     )
//         // })       
// }

// export default randomWirePriceEpic;

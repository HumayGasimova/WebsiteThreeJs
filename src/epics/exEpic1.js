import { ofType } from 'redux-observable';
import 'rxjs';

import 'rxjs'
const pingEpic = action$ => action$.pipe(
  ofType('PING'),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo({ type: 'PONG' })
);

// const pingEpic = action$ =>
//   Observable.race(
 
//     action$.ofType("PING")
//   )
  
//     .map(() => ({
//       type: "PONG"
//     }));

export default pingEpic;
import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import setPlayerReducer from '../reducers/setPlayerReducer';
import mainBoxReducer from '../reducers/mainBoxReducer';
import mainBox4x4Reducer from '../reducers/mainBox4x4Reducer';
import winnerReducer from '../reducers/winnerReducer';
import sideDrawerReducer from '../reducers/sideDrawerReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    setPlayer: setPlayerReducer,
    mainBox: mainBoxReducer,
    mainBox4x4: mainBox4x4Reducer,
    gameOver: winnerReducer,
    sideDrawer: sideDrawerReducer
});

// import {
//     TEST_TYPE
// } from '../constants/actionTypes';
// import {
//     combineReducers
// } from 'redux';
// import {
//     connectRouter
// } from 'connected-react-router';



// const initialState = {
//     mainBox: ['','','',
//              '','','',
//              '','',''],
//     firstPlayer: null
// };

// function updateBox (state = initialState, action){
//     if(action.type === TEST_TYPE){
//         return Object.assign({}, state, {
//             articles: state.articles.concat(action.payload)
//         });
//     }
//     return state;
// }

// export default (history) => combineReducers({
//     router: connectRouter(history),
//     rootReducer
// });

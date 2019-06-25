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

import { combineEpics } from 'redux-observable';
import pingEpic from './exEpic1'

const rootEpic = combineEpics(
    pingEpic
);

export default rootEpic;
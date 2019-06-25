import {
    TEST_TYPE
} from '../constants/actionTypes';

export function addArticle(payload){
    return {
        type: TEST_TYPE,
        payload
    }
};

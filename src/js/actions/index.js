import {
    TEST_TYPE
} from '../constants/action-types'

export function addArticle(payload){
    return {
        type: TEST_TYPE,
        payload
    }
};

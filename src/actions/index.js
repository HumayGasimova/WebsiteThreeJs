import {
    TEST_TYPE
} from '../components/Other/constants/action-types'

export function addArticle(payload){
    return {
        type: TEST_TYPE,
        payload
    }
};

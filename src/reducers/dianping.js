import {FETCH_DianPing_INFO_SUC,FETCH_DianPing_MyHistory_INFO_SUC} from '../const/ActionTypes.js'

export default function DianPing(state=[],action){
  switch(action.type){
        case FETCH_DianPing_INFO_SUC:
            let result = action.response.result;
            return result;
        case FETCH_DianPing_MyHistory_INFO_SUC:
            let result1 = action.response.result;
            return result;
        default:
        return state;
        }
}
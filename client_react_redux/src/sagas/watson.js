import { takeEvery, call, put, fork } from 'redux-saga/effects';
import { Types } from '../constants';
import * as actions from '../actions/homeActions';
import * as api from '../api/watson';


function* getWatsonEmotions({ payload }){
	try{
    const {data} = yield call(api.getWatsonEmotions, payload)
    yield put(actions.fetchDataFulFilled({
      payload: data
    }))
	}catch(e){
    yield put(actions.watsonError({
      error: 'An error ocurred when trying to create the user'
    }));
	}
}

function* watchGetWatsonEmotions(){
  yield takeEvery(Types.GET_WATSON_EMOTIONS, getWatsonEmotions);
}

const watsonSagas = [
  fork(watchGetWatsonEmotions)
];

export default watsonSagas;
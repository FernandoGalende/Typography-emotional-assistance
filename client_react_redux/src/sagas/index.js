import watsonSagas from './watson';
import { all } from 'redux-saga/effects';

export default function* rootSaga(){
	yield all([
		...watsonSagas
	]);
}
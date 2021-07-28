import { all } from 'redux-saga/effects';
import { sampleRootSaga } from './sample';

export default function* rootSaga() {
  yield all([...sampleRootSaga]);
}

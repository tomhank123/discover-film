import request from 'api/request';
import { REQUEST } from 'utils/reduxUtils';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { GET_DETAILS, getDetails } from './actions';

export function* fetchDetails({ request: { personId } }) {
  const requestDetails = `/person/${personId}?append_to_response=combined_credits,images,external_ids,tagged_images`;

  yield delay(2000);

  try {
    const details = yield call(request, 'get', requestDetails);

    yield put(
      getDetails.success({
        ...details,
        known_for: [
          ...details.combined_credits.cast.filter(item => item.poster_path),
        ],
      }),
    );
  } catch ({ message }) {
    yield put(getDetails.failure(message));
  }
}

export function* watchDetails() {
  yield takeLatest(GET_DETAILS[REQUEST], fetchDetails);
}

export default function* personDetailsSaga() {
  yield all([watchDetails()]);
}

import request from 'api/request';
import queryString from 'query-string';
import { REQUEST } from 'utils/reduxUtils';
import { createEndpoint } from 'utils/apiUtils';
import { push } from 'connected-react-router';
import { takeLatest, all, call, put, delay, select } from 'redux-saga/effects';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { makeSelectLocation } from 'containers/App/selectors';
import { GET_MEDIA_DETAILS, getMediaDetails } from 'containers/App/actions';
import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export function* fetchDetails({ request: { id, mediaType } }) {
  yield delay(2000);

  const language = yield select(makeSelectLocale());
  const requestUrl = createEndpoint(`/${mediaType}/${id}`, {
    append_to_response: 'similar,videos,images,credits,reviews',
    language,
  });

  try {
    const details = yield call(request, 'get', requestUrl);

    yield put(getMediaDetails.success(details));
  } catch ({ message }) {
    yield put(getMediaDetails.failure(message));
  }
}

export function* watchOpenModal() {
  yield takeLatest(OPEN_MODAL, function* anonymous({ selectedMedia: { id } }) {
    if (id) {
      yield put(
        push({
          search: `?jbv=${id}`,
        }),
      );
    }
  });
}

export function* watchCloseModal() {
  yield takeLatest(CLOSE_MODAL, function* anonymous() {
    const { search } = yield select(makeSelectLocation());
    let params = queryString.parse(search);
    delete params.jbv;

    params = queryString.stringify(params);

    yield put(
      push({
        search: params,
      }),
    );
  });
}

export function* watchDetails() {
  yield takeLatest(GET_MEDIA_DETAILS[REQUEST], fetchDetails);
}

export default function* mediaModalSaga() {
  yield all([watchDetails(), watchOpenModal(), watchCloseModal()]);
}

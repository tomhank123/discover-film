import request from 'api/request';
import { REQUEST } from 'utils/reduxUtils';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { GET_COLLECTIONS, getCollections } from './actions';

export function* fetchCollecttions() {
  const getPopularInTheaters = '/movie/popular';
  const getPopularOnTv = '/tv/popular';
  const getTrendingToday = '/trending/all/day';
  const getTrendingThisWeek = '/trending/all/week';

  yield delay(2000);

  try {
    const [
      popularInTheaters,
      popularOnTv,
      trendingToday,
      trendingThisWeek,
    ] = yield all([
      call(request, 'get', getPopularInTheaters),
      call(request, 'get', getPopularOnTv),
      call(request, 'get', getTrendingToday),
      call(request, 'get', getTrendingThisWeek),
    ]);

    yield put(
      getCollections.success([
        {
          id: 'Popular On TV',
          title: 'Popular On TV',
          data: popularOnTv,
        },
        {
          id: 'Popular In Theaters',
          title: 'Popular In Theaters',
          data: popularInTheaters,
        },
        {
          id: 'Trending Today',
          title: 'Trending Today',
          data: {
            ...trendingToday,
            results: trendingToday.results.filter(item =>
              ['movie', 'tv'].includes(item.media_type),
            ),
          },
        },
        {
          id: 'Trending This Week',
          title: 'Trending This Week',
          data: {
            ...trendingThisWeek,
            results: trendingThisWeek.results.filter(item =>
              ['movie', 'tv'].includes(item.media_type),
            ),
          },
        },
      ]),
    );
  } catch ({ message }) {
    yield put(getCollections.failure(message));
  }
}

export function* watchCollections() {
  yield takeLatest(GET_COLLECTIONS[REQUEST], fetchCollecttions);
}

export default function* browseSaga() {
  yield all([watchCollections()]);
}

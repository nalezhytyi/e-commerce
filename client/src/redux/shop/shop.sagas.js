import { put, call, takeLatest, all } from '@redux-saga/core/effects';
import shopActionTypes from './shop.types';
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }

    /*collectionRef
        .get()
        .then(snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)))*/
}

export function* fetchCollectionsStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}

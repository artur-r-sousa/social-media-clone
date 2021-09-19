import userTypes from "../actions/types/userTypes"
import tweetTypes from "../actions/types/tweetTypes"
import { call, all, put, takeLatest } from "redux-saga/effects"
import { instance } from "../../../utils/Api"


async function callAPI() {
    try {
        const res = await instance.get('http://localhost:3333/users/1')
        return res
    } catch (err) {
        return console.log(err)
    }

}

async function getTweets() {
    try {
        const res = await instance.get('http://localhost:3333/tweets/')
        return res
    } catch (err) {
        return console.log(err)
    }

}

function* loadTweetsSaga({ payload }) {
    try {
        let response = yield call(getTweets, payload)
        yield put({
            type: tweetTypes.SET_TWEETS,
            payload: response
        })
    } catch (err) {
        console.log(err)
    }
}

function* loadUserSaga({ payload }) {
    try {
        let response = yield call(callAPI, payload)
        yield put({
            type: userTypes.SET_USER,
            payload: response
        })
    } catch (err) {
        console.log(err)
    }
}

export default function* rootSaga() {
    return all([
        yield takeLatest(userTypes.LOAD_USER_SAGA, loadUserSaga),
        yield takeLatest(tweetTypes.LOAD_TWEETS_SAGA, loadTweetsSaga)
    ])
}
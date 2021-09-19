import types from "./types/tweetTypes"

export const loadTweets = res => ({
    type: types.LOAD_TWEETS_SAGA ,
    payload: { res }
})

export const setIsLoadingtweets = () => ({
    type: types.IS_LOADING
})

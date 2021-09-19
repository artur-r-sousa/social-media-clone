import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import sagas from './sagas/'
import rootReducer from "./reducers/rootReducer"

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(sagas)
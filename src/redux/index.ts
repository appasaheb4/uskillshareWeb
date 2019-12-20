import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { call, all, spawn } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import commonReducers from "./reducers/common";
import homeDetialsReducers from "./reducers/homeDetails";
import postNotesReducers from "./reducers/postNotes";

// Watcher
import {
  commonGetWatcher,
  commonGetWithParaWatcher,
  commonPostInsertWatcher,
  commonPostUpdateWatcher,
  commonPostDeleteWatcher
} from "./sagas/common";
import { userListWatcher } from "./sagas/homeDetails";
import { postNotesWatcher, getPostNotesWatcher } from "./sagas/postNotes";

const rootSaga = function*() {
  const sagas = [
    //common
    commonGetWatcher,
    commonGetWithParaWatcher,
    commonPostInsertWatcher,
    commonPostUpdateWatcher,
    commonPostDeleteWatcher,
    // home Detials
    userListWatcher,
    // post notes
    postNotesWatcher,
    getPostNotesWatcher
  ];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
};

const rootReducer = combineReducers({
  common: commonReducers,
  home: homeDetialsReducers,
  postNotes: postNotesReducers
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export { store };

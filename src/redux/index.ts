import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { call, all, spawn } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import commonReducers from "./reducers/common";
import homeDetialsReducers from "./reducers/homeDetails";

// Watcher
import {
  commonGetWithParaWatcher,
  commonPostInsertWatcher,
  commonPostUpdateWatcher,
  commonPostDeleteWatcher
} from "./sagas/common";
import { userListWatcher } from "./sagas/homeDetails";

const rootSaga = function*() {
  const sagas = [
    //common
    commonGetWithParaWatcher,
    commonPostInsertWatcher,
    commonPostUpdateWatcher,
    commonPostDeleteWatcher,
    // home Detials
    userListWatcher
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
  home: homeDetialsReducers
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export { store };

//import { call, put, select } from "redux-saga/effects";

import { helperWatcher } from "../utils/utilities";

function* userListWorker({ payload }) {
  console.log({ payload });
}

export const userListWatcher = helperWatcher(userListWorker, "testing");

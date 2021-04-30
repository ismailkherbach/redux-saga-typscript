import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_HEADER, GET_ORDERS } from "../actions";
import axios, { AxiosResponse } from "axios";
import {
  getHeaderSuccess,
  getHeaderError,
  getOrdersSuccess,
  getOrdersError,
} from "./actions";

interface ServerResponse {
  status: number;
  data: any;
}

type HeaderResponse = AxiosResponse<ServerResponse>;

function getHeaderAsync(): Promise<HeaderResponse> {
  return new Promise(async (resolve) => {
    const response: HeaderResponse = await axios.get(
      "https://evoteam-verasoft.github.io/data/summary.json"
    );
    resolve(response);
  });
}

function* getHeaderUser() {
  try {
    const response: HeaderResponse = yield call(getHeaderAsync);
    yield put(getHeaderSuccess(response.data));
  } catch (error) {
    yield put(getHeaderError("error occured"));
  }
}

function getOrdersAsync(): Promise<HeaderResponse> {
  return new Promise(async (resolve) => {
    const response: HeaderResponse = await axios.get(
      "https://evoteam-verasoft.github.io/data/orders.json"
    );
    resolve(response);
  });
}

function* getOrdersUser() {
  try {
    const response: HeaderResponse = yield call(getOrdersAsync);
    yield put(getOrdersSuccess(response.data));
  } catch (error) {
    yield put(getOrdersError("error occured"));
  }
}

export function* watchGetHeader() {
  yield takeEvery(GET_HEADER, getHeaderUser);
}
export function* watchGetOrders() {
  yield takeEvery(GET_ORDERS, getOrdersUser);
}

export default function* rootSaga() {
  yield all([fork(watchGetHeader), fork(watchGetOrders)]);
}

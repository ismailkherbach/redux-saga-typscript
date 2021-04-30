import {
  GET_HEADER,
  GET_HEADER_ERROR,
  GET_HEADER_SUCCESS,
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS,
  SET_NEW_ORDER,
} from "../actions";

export const setNewOrder = () => ({
  type: SET_NEW_ORDER,
});

export const getHeader = () => ({
  type: GET_HEADER,
});

export const getHeaderSuccess = (header: any) => ({
  type: GET_HEADER_SUCCESS,
  payload: header,
});

export const getHeaderError = (error: String) => ({
  type: GET_HEADER_ERROR,
  payload: error,
});

export const getOrders = () => ({
  type: GET_ORDERS,
});

export const getOrdersSuccess = (orders: any) => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders,
});

export const getOrdersError = (error: String) => ({
  type: GET_ORDERS_ERROR,
  payload: error,
});

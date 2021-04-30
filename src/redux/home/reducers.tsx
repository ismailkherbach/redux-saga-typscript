import {
  GET_HEADER,
  GET_HEADER_ERROR,
  GET_HEADER_SUCCESS,
  GET_ORDERS,
  GET_ORDERS_ERROR,
  GET_ORDERS_SUCCESS,
  SET_NEW_ORDER,
} from "../actions";

export interface INIT_STATE {
  loading: boolean;
  error: String;
  header: any;
  orders: any;
  blured: boolean;
}

const initialState: INIT_STATE = {
  error: "",
  loading: false,
  header: null,
  blured: false,
  orders: [],
};

export default (state: INIT_STATE = initialState, action: any): INIT_STATE => {
  switch (action.type) {
    case GET_HEADER:
      return { ...state, loading: true, error: "" };
    case SET_NEW_ORDER:
      return { ...state, blured: !state.blured };
    case GET_HEADER_SUCCESS:
      return { ...state, loading: false, header: action.payload, error: "" };
    case GET_HEADER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GET_ORDERS:
      return { ...state, loading: true, error: "" };
    case GET_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload, error: "" };
    case GET_ORDERS_ERROR:
      return { ...state, loading: false, orders: action.payload };

    default:
      return { ...state };
  }
};

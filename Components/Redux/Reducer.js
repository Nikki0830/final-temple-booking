import React from 'react';
import {connect} from 'react-redux';
import {FORM_DATA, SET_BOOKINGLIST, SET_FORMDATA} from './Action';
// import * as actionCreators from "./Actions";

const initialState = {
  userDetails: [],
  formData: {
    name: '',
    adult: '',
    children: '',
    email: '',
    phone: '',
    date: '',
  },
  bookinglist: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_DATA:
      console.log("FORMDATA1",state.userDetails);
      return {
        ...state,
        formData: [...state.userDetails, action.payload],
      };
    case SET_FORMDATA:
      console.log("FORMDATA2",state.userDetails);
      return {
        ...state,
        formData: {
          name: action.payload.name,
          adult: action.payload.adult,
          children: action.payload.children,
          email: action.payload.email,
          phone: action.payload.phone,
          date: action.payload.date,
        },
      };
    case SET_BOOKINGLIST:
      console.log(state.userDetails);
      return {
        ...state,
        bookinglist: action.payload,
      };
    default:
      return state;
  }
};

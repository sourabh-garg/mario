
import {getQueryStringValue, getCookie } from './cookies';
import * as Type from './actionConstants';
import {setLocaleStorage} from '../helperFunction/localStorage';
import {browserHistory} from 'react-router';
import api from '../api/api';


export function dispatchAction(type, payload){
  return function(dispatch){
    dispatch({ type: type , payload: payload});
  };
}



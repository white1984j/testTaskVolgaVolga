import {
  START,
  SUCCESS,
  FAILURE,
  REQTRANSLATE
} from '../constants'

const initialState = {
  text: '',
  error: false
}

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case REQTRANSLATE+START:
      return {
        ...state,
        error: false
      };
    case REQTRANSLATE+SUCCESS:
      return {
        ...state,
        text: payload.text[0]
      };
    case REQTRANSLATE+FAILURE:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
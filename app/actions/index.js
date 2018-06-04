import {
  START,
  SUCCESS,
  FAILURE,
  REQTRANSLATE,
  GETBARCODES
} from '../constants'

export function reqTranslate(text, lang){
  return (dispatch) => {
    dispatch({
      type: REQTRANSLATE+START
    })

    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180523T071314Z.226dc8a1cf6ad35b.82e1f69c554677407db73b936d4bca7c2ebe6b2e&text=${text}&lang=${lang}-ru`)
      .then(res => {
          if (res.status >= 400) {
              throw new Error(res.statusText)
          }
          return res.json()
      })
      .then(res =>{
        return dispatch({
          type: REQTRANSLATE + SUCCESS,
          payload: res
        })}
      )
      .catch( (err) => {
        dispatch({
          type: REQTRANSLATE+FAILURE
      })
    })
  }
}

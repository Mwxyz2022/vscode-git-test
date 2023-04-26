import { showAlert } from './actions'
import { CREATE_POST } from './types'

const forbidden = ['someWords1', 'someWords2']

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return next => {
    return action => {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(word => action.payload.title.includes(word))

        if (found.length) {
          return dispatch(showAlert('Вы ввели неправильное слово!'))
        }
      }
      return next(action)
    }
  }
}

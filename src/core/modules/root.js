import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { catchError } from 'rxjs/operators'

import { pingReducer, pingEpic } from './ping'

const epics = [pingEpic]

export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )

export const rootReducer = combineReducers({
  ping: pingReducer,
})

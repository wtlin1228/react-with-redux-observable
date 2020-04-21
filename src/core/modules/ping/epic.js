import { ofType } from 'redux-observable'
import { delay, mapTo } from 'rxjs/operators'

import { actions } from './slice'

const pingEpic = (action$) =>
  action$.pipe(
    ofType(actions.ping.type),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo(actions.pong())
  )

export default pingEpic

import { reducer as formReducer } from 'redux-form'

import shortlistState from './shortlist'
import user from './user'

export default {
  form: formReducer,
  shortlistState,
  user
}

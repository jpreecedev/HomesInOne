import { reducer as formReducer } from 'redux-form'

import checklistState from './checklist'
import shortlistState from './shortlist'
import user from './user'

export default {
  form: formReducer,
  checklistState,
  shortlistState,
  user
}

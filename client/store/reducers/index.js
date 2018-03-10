import { reducer as formReducer } from 'redux-form'

import shortlists from './shortlist'
import user from './user'

export default {
  form: formReducer,
  shortlists,
  user
}

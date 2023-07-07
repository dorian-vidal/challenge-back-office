import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state: {
    config: {},
    screen: 'desktop', // current screen user has
    global: {}, // store data like header links or footer links,
    cv: null, // cache invalidation
  },
}

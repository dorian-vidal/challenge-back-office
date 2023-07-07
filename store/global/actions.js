import Vue from 'vue'

export default {
  loadScreen(context, res) {
    context.commit('setScreen', res)
  },
}

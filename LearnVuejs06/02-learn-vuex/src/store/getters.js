export default {
  powerCounter(state) {
    return Math.pow(state.counter, 2);
  },
  powCounter(state) {
    return pow => {
      return Math.pow(state.counter, pow);
    }
  }
}
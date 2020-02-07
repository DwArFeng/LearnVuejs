export default {
  //固定的格式。
  aUpdateInfo(context) {
    setTimeout(() => {
      context.commit('updateInfo');
    }, 1000);
  }
}
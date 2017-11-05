export default helpers = {
  'enum': (variableNames) => {
    variableNames.reduce((ret, it) => {
      ret[it] = it;
      return ret;
    }, {});
  }
};
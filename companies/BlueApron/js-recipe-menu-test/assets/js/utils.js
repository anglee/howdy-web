(function (global) {
  const {_, document} = global;

  const mirrorEnum = (list) => {
    return list.reduce((obj, it) => {
      obj[it] = it;
      return obj;
    }, {});
  };

  const setLocationHash = (...tokens) => {
    global.location.hash = `#${tokens.join('/')}`;
  };
  const getLocationHashTokens = () => {
    const hash = _.startsWith(global.location.hash, '#')
      ? global.location.hash.substr(1)
      : global.location.hash;
    return !_.isEmpty(hash) ? hash.split('/') : [];
  };

  const getParameterByName = (name, url) => {
    if (!url) url = global.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  const whenDomIsReady = () => {
    return new Promise((resolve) => {
      $(document).ready(() => {
        resolve();
      })
    });
  };

  global.utils = {
    mirrorEnum,
    setLocationHash,
    getLocationHashTokens,
    whenDomIsReady,
    getParameterByName
  };

})(window);
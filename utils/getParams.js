module.exports = function getParams() {
  let queryParams = {};
  const locationSearch = location.search;
  if (locationSearch.length) {
    const params = location.search.substr(1).split('&');
    let keyValue;
    for (let i = 0; i < params.length; i++) {
      keyValue = params[i].split('=');
      if (keyValue.length > 1) {
        queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
      }
    }
  }

  return queryParams;
}

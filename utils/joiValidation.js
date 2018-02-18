export function normalizeErrors(joiErr) {
  var errors = {};
  for (var i = 0, leni = joiErr.details.length; i < leni; i++) {
    var detail = joiErr.details[i];
    var path = detail.path;
    var err = detail.message;
    path.slice(0, -1).reduce((acc, lvl) => acc[lvl] || (acc[lvl] = {}), errors)[
      path.slice(-1)[0]
    ] = err;
  }
  return errors;
}

export default {
  normalizeErrors
};

export function normalizeErrors(joiErr) {
  let errors = {};
  for (let i = 0, leni = joiErr.details.length; i < leni; i++) {
    let detail = joiErr.details[i];
    let path = detail.path;
    let err = detail.message;
    path.slice(0, -1).reduce((acc, lvl) => acc[lvl] || (acc[lvl] = {}), errors)[path.slice(-1)[0]] = err;
  }
  
  return errors;
}

export default {
  normalizeErrors
};

import SecureLS from 'secure-ls'
var ls = new SecureLS();

/** For "caching" data */
const tokenService = {
  set: token => ls.set('seosemapi', { token }),
  get: () => ls.get('seosemapi'),
  delete: () => ls.removeAll()
}

export default tokenService

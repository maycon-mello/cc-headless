
export default {
  setItem(key, data) {
    return Promise.resolve(localStorage.setItem(key, data))
  },

  getItem(key) {
    return Promise.resolve(localStorage.getItem(key))
  },

  removeItem(key) {
    return Promise.resolve(localStorage.removeItem(key))
  },

  clear() {
    return Promise.resolve(localStorage.clear())
  },

  // key() {
  //   return Promise.resolve(localStorage.key.apply(this, arguments))
  // },

  get length() {
    return localStorage.length;
  },
}
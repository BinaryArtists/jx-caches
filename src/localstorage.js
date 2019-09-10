class LocalStorage {
  constructor () {
    this.ls = window.localStorage;
  }

  /**
   * 设置localStorage
   * 
   * @param {*} key 
   * @param {*} val 
   */
  set (key, val) {
    var setting = arguments[0];
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for(var i in setting) {
        this.ls.setItem(i, JSON.stringify(setting[i]));
      }
    } else {
      this.ls.setItem(key, JSON.stringify(val));
    }
  }

  /**
   * 获取localStorage
   * 
   * @param {*} key 
   */
  get (key) {
    if (key) return JSON.parse(this.ls.getItem(key));
    return null;
  }

  /**
   * 移除localStorage
   */
  remove (key) {
    this.ls.removeItem(key);
  }

  /**
   * 移除所有localStorage
   */
  clear () {
    this.ls.clear();
  }
}

export default new LocalStorage();
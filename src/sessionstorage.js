class SessionStorage {
  constructor () {
    this.ss = window.sessionStorage;
  }

  /**
   * 获取localStorage
   * 
   * @param {*} key 
   * @param {*} val 
   */
  set (key, val) {
    var setting = arguments[0];
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for(var i in setting){
        this.ss.setItem(i, JSON.stringify(setting[i]))
      }
    } else {
      this.ss.setItem(key, JSON.stringify(val))
    }
  }

  /**
   * 获取sessionStorage
   * 
   * @param {*} key 
   */
  get (key) {
    if (key) return JSON.parse(this.ss.getItem(key));
      return null;
  }

  /**
   * 移除sessionStorage
   * 
   * @param {*} key 
   */
  remove (key) {
    this.ss.removeItem(key);
  }

  /**
   * 移除所有sessionStorage
   */
  clear () {
    this.ss.clear();
  }
}

export default new SessionStorage()
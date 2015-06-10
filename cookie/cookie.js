/**
 * 1. document.cookie 得到以;分隔的cookie串，中间还有个空格比如 'a=1; b=2'
 * 2. 设置cookie只要document.cookie = 'name=value; expires=time; path=path; domain=domain; secure=secure'
 *    不会把已有的cookie覆盖掉。其中expires是UTC时间的字符串，可通过new Date().toUTCString()得到，不设置expires就是session的
 * 3. 
 *
 *
 *
 *
 * 
 */

function getCookie(name) {
  var cookies = document.cookie.split(';');
  var cookie;
  for (var i = 0, l = cookies.length; i < l; i++) {
    cookie = cookies[i].replace('^\s+|\s+$', '').split('=');
    if (cookie[0] === name) {
      return decodeURIComponent(cookie[1]);
    }
  }
}

/**
 * 设置一个cookie
 * @param {String} name   [description]
 * @param {String} value  [description]
 * @param {Object} option [description]
 *     expires Number 天数
 *     domain
 *     path
 *     secure
 */
function setCooike(name, value, option) {
  var time, expires;
  if (option.expires) {
    time = new Date().getTime() + option.expires * 24 * 60 * 60 * 1000;
    expires = ' ;expires=' + new Date(time).toUTCString();
  }
  var path = options.path ? '; path=' + options.path : '';
  var domain = options.domain ? '; domain=' + options.domain : '';
  var secure = options.secure ? '; secure' : '';
  document.cookie = name + '=' + encodeURIComponent(value) + expires + path + domain + secure;
}

function deleteCookie(name) {
  document.cookie = name + '=;' + 'expires=' + new Date(new Date().getTime() - 1).toUTCString();
}
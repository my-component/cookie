## 特点

1. `document.cookie` 得到以;分隔的cookie串，中间还有个空格比如 'a=1; b=2'
2. 设置cookie只要`document.cookie = 'name=value; expires=time; path=path; domain=domain; secure=secure'`，不会把已有的cookie覆盖掉。

## 属性

#### path
子目录可以访问父目录设置的cookie

默认设置在当前**目录**下

#### domain
子域可以访问父域设置的cookie

默认设置在当前域名

#### expires
expires是UTC时间的字符串，可通过new Date().toUTCString()得到，不设置expires就是session的

#### secure
secure 是布尔值，设置只要添加该属性即可，比如
```js
document.cookie='key=value;secure'
```


## good code
https://github.com/js-cookie/js-cookie

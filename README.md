[![node](https://img.shields.io/node/v/siwi-md5.svg)](https://www.npmjs.com/package/siwi-md5)
[![Build Status](https://travis-ci.org/siwilizhao/siwi-md5.svg?branch=master)](https://travis-ci.org/siwilizhao/siwi-md5)
[![npm](https://img.shields.io/npm/v/siwi-md5.svg)](https://www.npmjs.com/package/siwi-md5)
[![npm](https://img.shields.io/npm/dt/siwi-md5.svg)](https://www.npmjs.com/package/siwi-md5)
[![Github file size](https://img.shields.io/github/size/siwilizhao/siwi-md5/lib/md5.js.svg)](https://github.com/siwilizhao/siwi-md5/lib/md5.js)
# siwi-md5
nodejs MD5

# install

## use npm 

` npm install siwi-md5`

## use yarn

` yarn add siwi-md5`

# Example

## md5

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>是否必选</th>
        <th>含义</th>
    </tr>
    <tr>
        <th>data</th>
        <th>String | Buffer | Object</th>
        <th>是</th>
        <th>加密值 字符串或者对象 对象会自动进行 JSON.stringify() </th>
    </tr>
</table>

```js
const md5 = require('siwi-md5')

class Example {
    constructor() {
        this.init()
    }
    async init () {
        const res = await md5.sign('123')
        console.log(res)
    }
}

module.exports = new Example()
```

> 输出:202cb962ac59075b964b07152d234b70

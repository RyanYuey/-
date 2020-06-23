/**
 * 03 js题目：用js实现一个方法，返回数组里出现次数最多的一个元素。
 * @method getArrMost
 * @param {Array} arr 
 */
const getArrMost = function (arr) {
  let m = new Map();  //创建map对象保存元素和元素出现的次数
  let key = arr[0];  //保存元素
  let val = 1; //保存元素出现次数
  arr.forEach((item, index) => {
    if (m.get(item) !== undefined) {
      let num = m.get(item);
      m.set(item, ++num);
    } else {
      m.set(item, 1);
    }
    if (m.get(item) > val) {
      key = item;
      val = m.get(item)
    }

  })
  return key
}

/**
 * 04 js题目：提取一个URL的协议类型、域名、端口、参数（参数提取为object）。
 * @method getUrlInfo
 */
const getUrlInfo = function () {
  let str = window.location.search;

  // 参数字符串转对象
  let arr = str.split("&");
  let obj = {};
  for (let i of arr) {
    obj[i.split("=")[0]] = i.split("=")[1];  //对数组每项用=分解开，=前为对象属性名，=后为属性值
  }

  const urlInfo = {
    protocol: window.location.protocol, //协议类型
    host: window.location.href, //域名
    port: window.location.port, //端口
    params: obj //参数
  };

  return urlInfo;
}

/**
 * 05js题目：实现一个方法，把多维数组展开成一维数组
 * @method more2one
 * @param {Array} superArr
 */
const superArr2one = function (superArr) {
  return superArr.join().split(',')
}

/**
 * 06js题目：判断数字是否为对称数，比如121，1331，111
 * @method isReverse
 * @param {Number} num
 */
const isReverse = function (num) {
  let num2 = String(num).split('').reverse().join('') - 0;
  return num2 === num;
}

/**
 * 07js题目：请用js程序实现冒泡排序算法
 * @method bubble
 * @param {Array} arr
 */
const bubble = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
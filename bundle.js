"use strict";

var arr = [1, 2, 3, 4, 5];

var _loop = function _loop(i) {
    arr[i] = function () {
        console.log(arr[i]);
    }(i);
};

for (var i = 0; i < arr.length; i++) {
    _loop(i);
}

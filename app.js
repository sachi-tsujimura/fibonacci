"use strict";

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 2);

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }

  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}

const length = 40;

for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}

function trib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }

  const value = trib(n - 1) + rtib(n - 2) + trib(n - 3);
  memo.set(n, value);
  return value;
}

for (let i = 0; i <= length; i++) {
  console.log(trib(i));
}

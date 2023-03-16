number = 2;

  function add() {
    return (number += 5);
  }
  function subtract() {
    return (number -= 3)
  }
  function multiply() {
    return (number *= 4)
  }
  function divide() {
    return (number /= 1)
  }
  function add(a,b) {
    return a+b;
  }
  function subtract(a,b) {
    return a-b;
  }
  function multiply(a, b) {
    return a*b;
  }
  function divide(a,b) {
    return a/b;
  }
  function increment(n) {
    return ++n
  }
  function decrement(n) {
    return --n;
  }
  function makeInt(n) {
    return parseInt(n,10);
  }
  function preserveDecimal(n) {
    return parseFloat(n);
  }
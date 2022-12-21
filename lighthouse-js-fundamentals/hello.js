const sayHello = function (name) {
  console.log("hello, " + name);
};
console.log(sayHello("abe"));

const sayHelloToConsole = function (name) {
  console.log("hello, " + name);
};
sayHelloToConsole("John");

const returnSayHello = function (name) {
  return "Hello, " + name;
};
const greeting = returnSayHello("Abetastic");
console.log(greeting);

const validIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validIp.test("127.0.0.1"));
console.log(validIp.test("127.123.8.1"));
console.log(validIp.test("192.168.0.93"));
console.log(validIp.test("192.168.0"));
console.log(validIp.test("0.168.0,0"));
console.log(validIp.test("0.168.0.0"));
console.log(validIp.test("abc.abcd.abd.abc"));
console.log(validIp.test("1274.0455.0554.1545"));

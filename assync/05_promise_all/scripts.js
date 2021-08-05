const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("first promise");
    }, 5000);
});


const p2 = Promise.resolve("second promise");

const p3 = new Promise((resolve, reject) => {
    resolve("third promise");
});

Promise.all([p1, p2, p3]).then(values => console.log(values))
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 2, 3, 4];

function verify(arr) {
    if (arr.length >= 5) {
        console.log("Muitos elementos");
    } else if (arr.length <= 5) {
        console.log("Poucos elementos");
    }
}


verify(arr)
verify(arr2)
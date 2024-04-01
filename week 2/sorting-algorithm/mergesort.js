const arr = [-6, 20, 8, -2, 4];

function mergesort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftarr = arr.slice(0, mid);
    const rigtharr = arr.slice(mid);
    return merge(mergesort(leftarr), mergesort(rigtharr));
}

function merge(leftarr, rigtharr) {
    let sortedarr = [];
    while (leftarr.length && rigtharr.length) {
        if (leftarr[0] <= rigtharr[0]) {
            sortedarr.push(leftarr.shift());
        } else {
            sortedarr.push(rigtharr.shift());
        }
    }
    return [...sortedarr, ...leftarr, ...rigtharr];
}

console.log(mergesort(arr));

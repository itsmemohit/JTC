function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sortInWave(arr, n) {
    for (let i = 0; i < n; i += 2) {
        if (i > 0 && arr[i - 1] > arr[i])
            swap(arr, i - 1, i);
        if (i < n - 1 && arr[i] < arr[i + 1])
            swap(arr, i, i + 1);
    }
}


let arr = [1, 3, 4, 2, 7, 8];
let n = arr.length;
sortInWave(arr, n);
for (let i = 0; i < n; i++)
    var str = arr.join(', ');
console.log(str);

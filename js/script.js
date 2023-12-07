var sumOfElements = function (min, max, array) {
    if (min < 0 || max < 0)
        return -1;
    if (min > max)
        return 0;
    var indexMin = array.indexOf(min);
    var indexMax = array.indexOf(max);
    if (indexMin === -1 && indexMax === -1)
        return 0;
    indexMax === -1 && (indexMax = array[array.length - 1]);
    var sum = 0;
    for (var i = indexMin; i <= indexMax; i++) {
        sum += array[i];
    }
    return sum;
};
var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(sumOfElements(10, 100, array));
console.log(sumOfElements(30, 60, array));
console.log(sumOfElements(70, 40, array));
console.log(sumOfElements(90, 100, array));
console.log(sumOfElements(10, 10, array));
console.log(sumOfElements(100, 100, array));
console.log(sumOfElements(-10, 100, array));
console.log(sumOfElements(10, -100, array));
//# sourceMappingURL=script.js.map
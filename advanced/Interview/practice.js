var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ladderLopper = function (ladder) {
    var count = 0;
    var targetNumber = 0;
    if (!ladder.length) {
        return 0;
    }
    var ladderCopy = __spreadArray([], ladder, true);
    var found = false;
    while (!found) {
        for (var i = 0; i < ladderCopy.length; i++) {
            var value = ladderCopy[i];
            if (value === targetNumber) {
                found = true;
                return count;
            }
            value--;
            ladderCopy[i] = value;
        }
        count++;
    }
    return count;
};
var Two = [4, 5, 5, 4, 3, 5, 4];
console.log(ladderLopper(Two));

'use strict';

function rank_by_two_large_one_small(collection) {
    collection = collection.sort((a, b) => a - b);
    for (let i = 0, lens = collection.length; i + 3 < lens; i += 3) {
        let temp = collection[i];
        collection[i] = collection[i + 1];
        collection[i + 1] = collection[i + 2];
        collection[i + 2] = temp;
    }
    return collection;
}

module.exports = rank_by_two_large_one_small;
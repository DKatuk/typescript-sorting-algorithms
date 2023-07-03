"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection; // destructuring
        //Bubble Sort
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) { // -i because we know that the last element is already sorted
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1]; // take right hand and put it in left hand
                    this.collection[j + 1] = leftHand; // take left hand and put it in right hand
                }
            }
        }
    }
}
//instance of Sorter Class
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);

/**
 * @constructor
 */
var Queue = function() {
    this.stackOne = [];
    this.stackTwo = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.stackOne.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    if(this.stackTwo.length == 0){
        while(this.stackOne.length != 0){
            this.stackTwo.push(this.stackOne.pop());
        }
    }
    if(this.stackTwo.length != 0){
        this.stackTwo.pop();
    }
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    if(this.stackTwo.length == 0){
        while(this.stackOne.length != 0){
            this.stackTwo.push(this.stackOne.pop());
        }
    }
    if(this.stackTwo.length != 0){
        return this.stackTwo[this.stackTwo.length - 1];
    }
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.stackOne.length == 0 && this.stackTwo.length == 0;
};

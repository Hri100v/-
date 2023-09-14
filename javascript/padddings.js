String.prototype.padRight = function(count, char) {
     const len = this.length;
     const toAddSymbols = count - len;

     if (toAddSymbols <= 0) {
         return this;
     }

     return "".concat(this, ...new Array(toAddSymbols).fill(char));
 }

String.prototype.padLeft = function(count, char) {
     const len = this.length;
     const toAddSymbols = count - len;

     if (toAddSymbols <= 0) {
         return this;
     }

     return "".concat(...new Array(toAddSymbols).fill(char), this);
 }

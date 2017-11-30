"use strict";
var Hash = (function () {
    function Hash(id, document, transaction, timestamp) {
        this.id = id;
        this.document = document;
        this.transaction = transaction;
        this.timestamp = timestamp;
    }
    return Hash;
}());
exports.Hash = Hash;
//# sourceMappingURL=table.js.map
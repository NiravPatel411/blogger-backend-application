"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueryResultsModel = /** @class */ (function () {
    function QueryResultsModel(items, totalCount, errorMessage) {
        if (items === void 0) { items = []; }
        if (totalCount === void 0) { totalCount = 0; }
        if (errorMessage === void 0) { errorMessage = ''; }
        this.items = items;
        this.totalCount = totalCount;
    }
    return QueryResultsModel;
}());
exports.QueryResultsModel = QueryResultsModel;

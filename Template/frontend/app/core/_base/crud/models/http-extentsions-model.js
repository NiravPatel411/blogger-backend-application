"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_results_model_1 = require("./query-models/query-results.model");
var HttpExtenstionsModel = /** @class */ (function () {
    function HttpExtenstionsModel() {
    }
    /**
     * Filtration with sorting
     * First do Sort then filter
     *
     * @param entities: any[]
     * @param queryParams: QueryParamsModel
     * @param filtrationFields: string[]
     */
    HttpExtenstionsModel.prototype.baseFilter = function (entities, queryParams, filtrationFields) {
        if (filtrationFields === void 0) { filtrationFields = []; }
        // Filtration
        var entitiesResult = this.searchInArray(entities, queryParams.filter, filtrationFields);
        // Sorting
        // start
        if (queryParams.sortField) {
            entitiesResult = this.sortArray(entitiesResult, queryParams.sortField, queryParams.sortOrder);
        }
        // end
        // Paginator
        // start
        var totalCount = entitiesResult.length;
        var initialPos = queryParams.pageNumber * queryParams.pageSize;
        entitiesResult = entitiesResult.slice(initialPos, initialPos + queryParams.pageSize);
        // end
        var queryResults = new query_results_model_1.QueryResultsModel();
        queryResults.items = entitiesResult;
        queryResults.totalCount = totalCount;
        return queryResults;
    };
    /**
     * Sort array by field name and order-type
     * @param incomingArray: any[]
     * @param sortField: string
     * @param sortOrder: string
     */
    HttpExtenstionsModel.prototype.sortArray = function (incomingArray, sortField, sortOrder) {
        if (sortField === void 0) { sortField = ''; }
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        if (!sortField) {
            return incomingArray;
        }
        var result = [];
        result = incomingArray.sort(function (a, b) {
            if (a[sortField] < b[sortField]) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (a[sortField] > b[sortField]) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return result;
    };
    /**
     * Filter array by some fields
     *
     * @param incomingArray: any[]
     * @param queryObj: any
     * @param filtrationFields: string[]
     */
    HttpExtenstionsModel.prototype.searchInArray = function (incomingArray, queryObj, filtrationFields) {
        if (filtrationFields === void 0) { filtrationFields = []; }
        var result = [];
        var resultBuffer = [];
        var indexes = [];
        var firstIndexes = [];
        var doSearch = false;
        filtrationFields.forEach(function (item) {
            if (item in queryObj) {
                incomingArray.forEach(function (element, index) {
                    if (element[item] === queryObj[item]) {
                        firstIndexes.push(index);
                    }
                });
                firstIndexes.forEach(function (element) {
                    resultBuffer.push(incomingArray[element]);
                });
                incomingArray = resultBuffer.slice(0);
                resultBuffer = [].slice(0);
                firstIndexes = [].slice(0);
            }
        });
        Object.keys(queryObj).forEach(function (key) {
            var searchText = queryObj[key].toString().trim().toLowerCase();
            if (key && !filtrationFields.some(function (e) { return e === key; }) && searchText) {
                doSearch = true;
                try {
                    incomingArray.forEach(function (element, index) {
                        if (element[key]) {
                            var val = element[key].toString().trim().toLowerCase();
                            if (val.indexOf(searchText) > -1 && indexes.indexOf(index) === -1) {
                                indexes.push(index);
                            }
                        }
                    });
                }
                catch (ex) {
                    console.log(ex, key, searchText);
                }
            }
        });
        if (!doSearch) {
            return incomingArray;
        }
        indexes.forEach(function (re) {
            result.push(incomingArray[re]);
        });
        return result;
    };
    return HttpExtenstionsModel;
}());
exports.HttpExtenstionsModel = HttpExtenstionsModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class helper {
    constructor() {
        this.sendResponse = function (res, statusCode, data) {
            res.status(statusCode).json({ result: data });
        };
    }
}
exports.default = new helper();

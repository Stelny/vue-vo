"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EOrderSheetState = void 0;
var EOrderSheetState;
(function (EOrderSheetState) {
    EOrderSheetState[EOrderSheetState["WAITING"] = 0] = "WAITING";
    EOrderSheetState[EOrderSheetState["WORKING"] = 1] = "WORKING";
    EOrderSheetState[EOrderSheetState["COMPLETE"] = 2] = "COMPLETE";
})(EOrderSheetState || (exports.EOrderSheetState = EOrderSheetState = {}));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const toolkitSlice_1 = __importDefault(require("../toolkit/toolkitSlice"));
// const rootReducer = combineReducers({})
// export const setupStore = () => {
// 	configureStore({
// 		reducer: { toolkit: toolkitSlice }
// 	})
// }
exports.store = (0, toolkit_1.configureStore)({
    reducer: { toolkit: toolkitSlice_1.default },
});
//# sourceMappingURL=index.js.map
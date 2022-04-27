"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setValue = exports.fetchTodos = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const delay = (ms) => {
    return new Promise(res => setTimeout(() => res(), ms));
};
const url = 'https://jsonplaceholder.typicode.com/todos/1';
exports.fetchTodos = (0, toolkit_1.createAsyncThunk)('toolkit/fetchTodos', function (x) {
    return __awaiter(this, void 0, void 0, function* () {
        yield delay(2000);
        if (x !== "Admin") {
            console.log("Error");
            throw "err";
        }
    });
});
var Status;
(function (Status) {
    Status["loading"] = "loading";
    Status["resolved"] = "resolved";
    Status["rejected"] = "rejected";
})(Status || (Status = {}));
const initialState = {
    value: "text",
    status: ""
};
const toolkitSlice = (0, toolkit_1.createSlice)({
    name: "toolkit",
    initialState,
    reducers: {
        setValue(state, action) {
            console.log(action);
            // state.value = action.payload.value + action.payload.a
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(exports.fetchTodos.pending, (state) => {
            state.status = "loading";
            console.log('Working pending');
        })
            .addCase(exports.fetchTodos.fulfilled, (state) => {
            state.status = "resolved";
            console.log('Working fulfilled');
        })
            .addCase(exports.fetchTodos.rejected, (state) => {
            state.status = "rejected";
            console.log('Working rejected');
        });
    }
    // extraReducers: (builder) => {
    // 	builder
    // 		.addCase(fetchTodos.pending, (state, action) => {
    // 			state.status = "loading"
    // 			console.log('Working pending')
    // 		})
    // 		.addCase(fetchTodos.fulfilled, (state, action) => {
    // 			state.status = "resolved";
    // 			state.todos = action.payload
    // 			console.log('Working pending')
    // 		})
    // }
});
exports.default = toolkitSlice.reducer;
exports.setValue = toolkitSlice.actions.setValue;
//# sourceMappingURL=toolkitSlice.jsx.map
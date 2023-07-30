"use strict";
/**
 * For the purpose of this Website, the only person uploading blogs is me. Thus, I don't need a full UI with
 * authentication for generating content. Rather, I generate the document locally, and upload it to my DB by running
 * this script. The script has functionality for CRUD functionality.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var fs_1 = require("fs");
var readline = require("readline");
var prisma = new client_1.PrismaClient();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function _ask(question) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    return rl.question(question, function (answer) { return resolve(answer); });
                })];
        });
    });
}
function _formatTags(tags) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, tags
                    .map(function (tag) {
                    return "[".concat(tag.name.charAt(0).toUpperCase(), "]").concat(tag.name
                        .slice(1)
                        .toLowerCase());
                })
                    .join(", ")];
        });
    });
}
function processCreateBlog(content, title, desc, tags) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.post.create({
                        data: {
                            title: title,
                            description: desc,
                            content: content.toString(),
                            tags: {
                                connect: tags,
                            },
                        },
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function processUpdateBlog(id, content, tags) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.post.update({
                        where: {
                            id: id,
                        },
                        data: {
                            content: content.toString(),
                            tags: {
                                connect: tags,
                            },
                        },
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function processDeleteBlog(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.post.delete({
                        where: {
                            id: id,
                        },
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function processCreateTag(name, desc) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.tag.create({
                        data: {
                            name: name,
                            description: desc,
                        },
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function processUpdateTag(name, newDesc) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.tag.update({
                        where: {
                            name: name,
                        },
                        data: {
                            description: newDesc,
                        },
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function processDeleteTag(name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.tag.delete({
                        where: {
                            name: name,
                        },
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function processCreate(answer) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, path, content, postTitle, postDesc, tags, tagStr, tagAns_1, blogTags, name_1, tagDesc;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = answer.charAt(0).toLowerCase();
                    switch (_a) {
                        case "b": return [3 /*break*/, 1];
                        case "t": return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 13];
                case 1:
                    console.log("Creating Blog");
                    return [4 /*yield*/, _ask("Content Path: ")];
                case 2:
                    path = _b.sent();
                    content = (0, fs_1.readFileSync)(path);
                    return [4 /*yield*/, _ask("Post Title: ")];
                case 3:
                    postTitle = _b.sent();
                    return [4 /*yield*/, _ask("Post Description: ")];
                case 4:
                    postDesc = _b.sent();
                    return [4 /*yield*/, prisma.tag.findMany()];
                case 5:
                    tags = _b.sent();
                    return [4 /*yield*/, _formatTags(tags)];
                case 6:
                    tagStr = _b.sent();
                    return [4 /*yield*/, _ask("Select Tag: (".concat(tagStr, "): "))];
                case 7:
                    tagAns_1 = _b.sent();
                    blogTags = tags.filter(function (tag) {
                        return tagAns_1.toLowerCase().includes(tag.name.toLowerCase());
                    });
                    return [4 /*yield*/, processCreateBlog(content, postTitle, postDesc, blogTags)];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 9:
                    console.log("Creating Tag");
                    return [4 /*yield*/, _ask("Tag Name: ")];
                case 10:
                    name_1 = _b.sent();
                    return [4 /*yield*/, _ask("Tag Description: ")];
                case 11:
                    tagDesc = _b.sent();
                    return [4 /*yield*/, processCreateTag(name_1, tagDesc)];
                case 12:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 13: throw Error("".concat(answer, " is not a valid input"));
                case 14: return [2 /*return*/];
            }
        });
    });
}
function processUpdate(answer) {
    return __awaiter(this, void 0, void 0, function () {
        var id, _a, path, content, tags, tagStr, tagAns_2, blogTags, tagDesc;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, _ask("Identifier: ")];
                case 1:
                    id = _b.sent();
                    _a = answer.charAt(0).toLowerCase();
                    switch (_a) {
                        case "b": return [3 /*break*/, 2];
                        case "t": return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 11];
                case 2:
                    console.log("Updating Blog: ".concat(id));
                    return [4 /*yield*/, _ask("New Content Path: ")];
                case 3:
                    path = _b.sent();
                    content = (0, fs_1.readFileSync)(path);
                    return [4 /*yield*/, prisma.tag.findMany()];
                case 4:
                    tags = _b.sent();
                    return [4 /*yield*/, _formatTags(tags)];
                case 5:
                    tagStr = _b.sent();
                    return [4 /*yield*/, _ask("Select New Tags: (".concat(tagStr, "): "))];
                case 6:
                    tagAns_2 = _b.sent();
                    blogTags = tags.filter(function (tag) {
                        return tagAns_2.toLowerCase().includes(tag.name.toLowerCase());
                    });
                    return [4 /*yield*/, processUpdateBlog(id, content, blogTags)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 8:
                    console.log("Updating Tag: ".concat(id));
                    return [4 /*yield*/, _ask("Tag Description: ")];
                case 9:
                    tagDesc = _b.sent();
                    return [4 /*yield*/, processUpdateTag(id, tagDesc)];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 11: throw Error("".concat(answer, " is not a valid input"));
                case 12: return [2 /*return*/];
            }
        });
    });
}
function processDelete(answer) {
    return __awaiter(this, void 0, void 0, function () {
        var id, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, _ask("Identifier: ")];
                case 1:
                    id = _b.sent();
                    _a = answer.charAt(0).toLowerCase();
                    switch (_a) {
                        case "b": return [3 /*break*/, 2];
                        case "t": return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 6];
                case 2:
                    console.log("Deleting Blog: ".concat(id));
                    return [4 /*yield*/, processDeleteBlog(id)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 4:
                    console.log("Deleting Tag: ".concat(id));
                    return [4 /*yield*/, processDeleteTag(id)];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 7];
                case 6: throw Error("".concat(answer, " is not a valid input"));
                case 7: return [2 /*return*/];
            }
        });
    });
}
function processRequest(answer) {
    return __awaiter(this, void 0, void 0, function () {
        var type, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, _ask("[B]log or [T]ag: ")];
                case 1:
                    type = _b.sent();
                    _a = answer.charAt(0).toLowerCase();
                    switch (_a) {
                        case "c": return [3 /*break*/, 2];
                        case "u": return [3 /*break*/, 4];
                        case "d": return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 8];
                case 2: return [4 /*yield*/, processCreate(type)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 4: return [4 /*yield*/, processUpdate(type)];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 6: return [4 /*yield*/, processDelete(type)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8: throw Error("".concat(answer, " is not a valid input"));
                case 9:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var req;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _ask("[C]reate, [U]pdate, or [D]elete?: ")];
                case 1:
                    req = _a.sent();
                    return [4 /*yield*/, processRequest(req)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main();

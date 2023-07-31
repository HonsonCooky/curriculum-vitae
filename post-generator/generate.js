"use strict";
/**
 * The content of this file WOULD be used in the website, however, seeing as I am the only generator of posts, I've
 * built this functionality separate, to enable me to create, update, and delete Posts and Tags.
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
/**
 * Ask a CLI question.
 */
function _ask(question, backup) {
    if (backup === void 0) { backup = ""; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    return rl.question(question, function (answer) {
                        return resolve(answer.length > 0 ? answer : backup);
                    });
                })];
        });
    });
}
/**
 * Generate the contents for a Tag.
 */
function generateTag() {
    return __awaiter(this, void 0, void 0, function () {
        var name, description;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _ask("Tag Name: ")];
                case 1:
                    name = _a.sent();
                    return [4 /*yield*/, _ask("Tag Description: ")];
                case 2:
                    description = _a.sent();
                    return [2 /*return*/, {
                            name: name,
                            description: description,
                        }];
            }
        });
    });
}
/**
 * Create or Update a posts contents.
 */
function getPostContent(prevPost) {
    return __awaiter(this, void 0, void 0, function () {
        var ans;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!prevPost) return [3 /*break*/, 2];
                    return [4 /*yield*/, _ask("Update Content? [y/n]: ")];
                case 1:
                    ans = _a.sent();
                    if (ans.toLowerCase() == "y")
                        return [2 /*return*/, prevPost.content];
                    _a.label = 2;
                case 2: return [2 /*return*/, (0, fs_1.readFileSync)("./post-generator/content.html").toString()];
            }
        });
    });
}
/**
 * Create or Update a posts tags.
 */
function getPostTags(prevTags) {
    return __awaiter(this, void 0, void 0, function () {
        var tags, ans, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    tags = [];
                    if (!prevTags) return [3 /*break*/, 2];
                    return [4 /*yield*/, _ask("Use Previous Tags? [y/n]: ")];
                case 1:
                    ans = _c.sent();
                    if (ans.toLowerCase() == "y")
                        return [2 /*return*/, (tags = prevTags)];
                    _c.label = 2;
                case 2: return [4 /*yield*/, _ask("Add Tag? [y/n] ")];
                case 3:
                    if (!((_c.sent()).toLowerCase() == "y")) return [3 /*break*/, 5];
                    _b = (_a = tags).push;
                    return [4 /*yield*/, generateTag()];
                case 4:
                    _b.apply(_a, [_c.sent()]);
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, tags];
            }
        });
    });
}
/**
 * Generate the contents for a new Post.
 */
function generatePost(prevPost) {
    return __awaiter(this, void 0, void 0, function () {
        var title, description, content, tags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _ask("Blog Title: ", prevPost === null || prevPost === void 0 ? void 0 : prevPost.post.title)];
                case 1:
                    title = _a.sent();
                    return [4 /*yield*/, _ask("Blog Description: ", prevPost === null || prevPost === void 0 ? void 0 : prevPost.post.description)];
                case 2:
                    description = _a.sent();
                    return [4 /*yield*/, getPostContent(prevPost === null || prevPost === void 0 ? void 0 : prevPost.post)];
                case 3:
                    content = _a.sent();
                    return [4 /*yield*/, getPostTags(prevPost === null || prevPost === void 0 ? void 0 : prevPost.tags)];
                case 4:
                    tags = _a.sent();
                    return [2 /*return*/, { title: title, description: description, content: content, tags: tags }];
            }
        });
    });
}
/**
 * Create a new Post or Tag with prisma
 */
function processCreate(answer) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, post, tag;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = answer.charAt(0).toLowerCase();
                    switch (_a) {
                        case "b": return [3 /*break*/, 1];
                        case "t": return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 7];
                case 1: return [4 /*yield*/, generatePost()];
                case 2:
                    post = _b.sent();
                    return [4 /*yield*/, prisma.post.create({
                            data: {
                                title: post.title,
                                description: post.description,
                                date: new Date(),
                                content: post.content,
                                tags: {
                                    connectOrCreate: post.tags.map(function (tag) { return ({
                                        where: { name: tag.name },
                                        create: tag,
                                    }); }),
                                },
                            },
                        })];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 4: return [4 /*yield*/, generateTag()];
                case 5:
                    tag = _b.sent();
                    return [4 /*yield*/, prisma.tag.create({ data: tag })];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 7: throw Error("".concat(answer, " is not a valid input"));
                case 8: return [2 /*return*/];
            }
        });
    });
}
/**
 * Update a new Post or Tag with prisma
 */
function processUpdate(answer) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _ask("Identifier: ")];
                case 1:
                    id = _a.sent();
                    switch (answer.charAt(0).toLowerCase()) {
                        case "b":
                            break;
                        case "t":
                            break;
                        default:
                            throw Error("".concat(answer, " is not a valid input"));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Delete a new Post or Tag with prisma
 */
function processDelete(answer) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _ask("Identifier: ")];
                case 1:
                    id = _a.sent();
                    switch (answer.charAt(0).toLowerCase()) {
                        case "b":
                            break;
                        case "t":
                            break;
                        default:
                            throw Error("".concat(answer, " is not a valid input"));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Start basic line of questioning for CRUD applications
 */
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

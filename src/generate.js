"use strict";
/**
 * The content of this file WOULD be used in the website, however, seeing as I am the only generator of posts, I've
 * built this functionality separate, to enable me to create, update, and delete Posts and Tags.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function _ask(question) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    return rl.question(question, function (answer) { return resolve(answer); });
                })];
        });
    });
}
function processTag(crud) {
    return __awaiter(this, void 0, void 0, function () {
        var id, name, description, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, _ask("Tag Id: ")];
                case 1:
                    id = _b.sent();
                    return [4 /*yield*/, _ask("Tag Name: ")];
                case 2:
                    name = _b.sent();
                    return [4 /*yield*/, _ask("Tag Description: ")];
                case 3:
                    description = _b.sent();
                    _a = crud.toLowerCase();
                    switch (_a) {
                        case "c": return [3 /*break*/, 4];
                        case "u": return [3 /*break*/, 6];
                        case "d": return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 11];
                case 4: return [4 /*yield*/, prisma.tag.create({ data: { name: name, description: description } })];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 6: return [4 /*yield*/, prisma.tag.update({
                        where: { id: id },
                        data: { name: name, description: description },
                    })];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 8: return [4 /*yield*/, prisma.tag.update({
                        where: { id: id },
                        data: { posts: { set: [] } },
                    })];
                case 9:
                    _b.sent();
                    return [4 /*yield*/, prisma.tag.delete({ where: { id: id } })];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 11: throw Error("'".concat(crud, "' is not a CRUD command"));
                case 12: return [2 /*return*/];
            }
        });
    });
}
function processPost(crud) {
    return __awaiter(this, void 0, void 0, function () {
        var id, data, tags, _a, _b, _c, _d, _e;
        var _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0: return [4 /*yield*/, _ask("Post Id: ")];
                case 1:
                    id = _k.sent();
                    _f = {};
                    return [4 /*yield*/, _ask("Post Title: ")];
                case 2:
                    _f.title = _k.sent();
                    return [4 /*yield*/, _ask("Post Description: ")];
                case 3:
                    data = (_f.description = _k.sent(),
                        _f.content = (0, fs_1.readFileSync)("./src/content.md"),
                        _f.date = new Date(),
                        _f);
                    tags = [];
                    _k.label = 4;
                case 4: return [4 /*yield*/, _ask("Add Tag [y/n]: ")];
                case 5:
                    if (!((_k.sent()).toLowerCase() == "y")) return [3 /*break*/, 8];
                    _b = (_a = tags).push;
                    _g = {};
                    return [4 /*yield*/, _ask("Tag Name: ")];
                case 6:
                    _g.name = _k.sent();
                    return [4 /*yield*/, _ask("Tag Description: ")];
                case 7:
                    _b.apply(_a, [(_g.description = _k.sent(),
                            _g)]);
                    return [3 /*break*/, 4];
                case 8:
                    _c = crud.toLowerCase();
                    switch (_c) {
                        case "c": return [3 /*break*/, 9];
                        case "u": return [3 /*break*/, 11];
                        case "d": return [3 /*break*/, 15];
                    }
                    return [3 /*break*/, 18];
                case 9: return [4 /*yield*/, prisma.post.create({
                        data: __assign(__assign({}, data), { tags: {
                                connectOrCreate: tags.map(function (tag) { return ({
                                    where: { name: tag.name },
                                    create: tag,
                                }); }),
                            } }),
                    })];
                case 10:
                    _k.sent();
                    return [3 /*break*/, 19];
                case 11:
                    _e = (_d = prisma.post).update;
                    _h = {
                        where: { id: id }
                    };
                    _j = {
                        title: data.title || undefined,
                        description: data.description || undefined
                    };
                    return [4 /*yield*/, _ask("Override Content [y/n]: ")];
                case 12:
                    _j.content = (_k.sent()).toLowerCase() == "y"
                        ? data.content || undefined
                        : undefined,
                        _j.date = new Date();
                    return [4 /*yield*/, _ask("Override Tags [y/n]: ")];
                case 13: return [4 /*yield*/, _e.apply(_d, [(_h.data = (_j.tags = (_k.sent()).toLowerCase() == "y"
                            ? {
                                connectOrCreate: tags.map(function (tag) { return ({
                                    where: { name: tag.name },
                                    create: tag,
                                }); }),
                            }
                            : undefined,
                            _j),
                            _h)])];
                case 14:
                    _k.sent();
                    return [3 /*break*/, 19];
                case 15: return [4 /*yield*/, prisma.post.update({
                        where: { id: id },
                        data: { tags: { set: [] } },
                    })];
                case 16:
                    _k.sent();
                    return [4 /*yield*/, prisma.post.delete({ where: { id: id } })];
                case 17:
                    _k.sent();
                    return [3 /*break*/, 19];
                case 18: throw Error("'".concat(crud, "' is not a CRUD command"));
                case 19: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var crud, type, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, _ask("[C]reate, [U]pdate or [D]elete: ")];
                case 1:
                    crud = _b.sent();
                    return [4 /*yield*/, _ask("[P]ost or [T]ag: ")];
                case 2:
                    type = _b.sent();
                    _a = type.toLowerCase();
                    switch (_a) {
                        case "p": return [3 /*break*/, 3];
                        case "t": return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 3: return [4 /*yield*/, processPost(crud)];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, processTag(crud)];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 7: throw Error("'".concat(type, "' is not a valid data type"));
                case 8:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();

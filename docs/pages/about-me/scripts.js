import { implementSearchBox } from "../../modules/searchbox.js";

const searchBox = document.getElementById("page-search-input");
const searchBtn = document.getElementById("page-search-btn");
const searchArea = document.querySelector("main");
implementSearchBox(searchBox, searchBtn, searchArea);

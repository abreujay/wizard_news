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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchNews = searchNews;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const newsApiKey = process.env.NEWSAPIKEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`;
function searchNews() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Procurando Notícias...');
        try {
            const response = yield axios_1.default.get(url);
            const data = response.data.articles;
            const news = data.map(article => ({
                title: article.title,
                description: article.description,
                url: article.url
            }));
            return news;
        }
        catch (error) {
            console.error('Erro ao Buscar Notícias:', error);
            return [];
        }
    });
}

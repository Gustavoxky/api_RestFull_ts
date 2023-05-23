"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const newsService_1 = require("../service/newsService");
const helper_1 = require("../infra/helper");
class newsController {
    constructor() {
        this.sendResponse = function (res, statusCode, data) {
            res.status(statusCode).json({ result: data });
        };
    }
    get(req, res) {
        newsService_1.default.get()
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.log.bind(console, `error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newsService_1.default.getById(_id)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.log.bind(console, `error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        newsService_1.default.create(vm)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, 'noticia cadastrada com sucesso'))
            .catch(error => console.log.bind(console, `error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let news = req.body;
        newsService_1.default.update(_id, news)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, `${news.title} foi atualizada com sucesso`))
            .catch(error => console.log.bind(console, `error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newsService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, `noticia Deletada com sucesso`))
            .catch(error => console.log.bind(console, `error ${error}`));
    }
}
exports.default = new newsController();

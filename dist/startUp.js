"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const newsController_1 = require("./controller/newsController");
const dataBase_1 = require("./infra/dataBase");
class startUp {
    constructor() {
        this.app = express();
        this._db = new dataBase_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ version: '0.0.1' });
        });
        this.app.route("/api/v1/news").get(newsController_1.default.get);
        this.app.route('/api/v1/news/:id').get(newsController_1.default.getById);
        this.app.route('/api/v1/news').post(newsController_1.default.create);
        this.app.route('/api/v1/news/:id').put(newsController_1.default.update);
        this.app.route('/api/v1/news/:id').delete(newsController_1.default.delete);
    }
}
exports.default = new startUp();

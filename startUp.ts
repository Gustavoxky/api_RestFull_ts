import * as bodyParser from 'body-parser';
import * as express from 'express';
import newsController from './controller/newsController';
import dataBase from './infra/dataBase';

class startUp {
  public app: express.Application;
  private _db: dataBase
  private bodyParser

  constructor() {
    this.app = express();
    this._db = new dataBase()
    this._db.createConnection()
    this.middler()
    this.routes();
  }
  middler() {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({extended: false}))
  }
  routes(){
    this.app.route('/').get((req, res) => {
      res.send({version: '0.0.1'})
    })
    this.app.route("/api/v1/news").get(newsController.get);
    this.app.route('/api/v1/news/:id').get(newsController.getById);
    this.app.route('/api/v1/news').post(newsController.create);
    this.app.route('/api/v1/news/:id').put(newsController.update);
    this.app.route('/api/v1/news/:id').delete(newsController.delete);
  }
}

export default new startUp();
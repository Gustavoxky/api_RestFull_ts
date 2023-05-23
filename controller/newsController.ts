import * as HttpStatus from 'http-status';
import newsService from "../service/newsService";

import helper from '../infra/helper';

class newsController {

  sendResponse = function(res, statusCode, data) {
    res.status(statusCode).json({result: data})
  }
  get(req, res) {
    newsService.get()
    .then(news => helper.sendResponse(res, HttpStatus.OK, news))
    .catch(error => console.log.bind(console, `error ${error}`))
  }

  getById(req, res) {
    const _id = req.params.id
    newsService.getById(_id)
    .then(news => helper.sendResponse(res, HttpStatus.OK, news))
    .catch(error => console.log.bind(console, `error ${error}`))
  }

  create(req, res) {
    let vm = req.body
    newsService.create(vm)
    .then(news => helper.sendResponse(res, HttpStatus.OK, 'noticia cadastrada com sucesso'))
    .catch(error => console.log.bind(console, `error ${error}`))
  }

  update(req, res) {
    const _id = req.params.id
    let news = req.body
    newsService.update(_id, news)
    .then(news => helper.sendResponse(res, HttpStatus.OK, `${news.title} foi atualizada com sucesso`))
    .catch(error => console.log.bind(console, `error ${error}`))

  }

  delete(req, res) {
    const _id = req.params.id
    newsService.delete(_id)
    .then(() => helper.sendResponse(res, HttpStatus.OK, `noticia Deletada com sucesso`))
    .catch(error => console.log.bind(console, `error ${error}`))
  }
}

export default new newsController()